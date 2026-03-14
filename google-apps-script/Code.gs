/**
 * SupplySentinel — Google Apps Script Backend
 * =============================================
 * This script acts as a free REST API for SupplySentinel.
 * It stores citizen price reports in a Google Sheet and serves them as JSON.
 *
 * Endpoints (via Web App URL):
 *   GET  ?action=reports   → Returns all reports as JSON
 *   GET  ?action=stats     → Returns aggregated stats (count, MFI, area breakdown)
 *   POST (JSON body)       → Appends a new report row to the sheet
 *
 * Setup: See docs/DEPLOY.md for step-by-step instructions.
 */

// ============================================================
// CONFIGURATION
// ============================================================

const SHEET_NAME = 'Reports'; // Name of the sheet tab
const MAX_REPORTS = 500;      // Max reports to return (prevents timeout)

// ============================================================
// HTTP HANDLERS
// ============================================================

/**
 * Handle GET requests
 * ?action=reports → all reports
 * ?action=stats   → aggregated statistics
 */
function doGet(e) {
  const action = (e.parameter && e.parameter.action) || 'reports';

  try {
    if (action === 'stats') {
      return sendJSON(getStats());
    } else {
      return sendJSON(getReports());
    }
  } catch (err) {
    return sendJSON({ error: err.message }, 500);
  }
}

/**
 * Handle POST requests — add a new report
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const result = addReport(data);
    return sendJSON(result);
  } catch (err) {
    return sendJSON({ error: err.message }, 400);
  }
}

// ============================================================
// CORE FUNCTIONS
// ============================================================

/**
 * Get all reports from the sheet
 */
function getReports() {
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) {
    return { reports: [], count: 0, source: 'google-sheets' };
  }

  const headers = data[0];
  const reports = [];

  for (let i = Math.max(1, data.length - MAX_REPORTS); i < data.length; i++) {
    const row = data[i];
    const report = {};
    headers.forEach((h, idx) => {
      report[h] = row[idx];
    });
    // Convert timestamp back to milliseconds
    if (report.time && typeof report.time === 'object') {
      report.time = new Date(report.time).getTime();
    }
    reports.push(report);
  }

  // Return newest first
  reports.reverse();

  return {
    reports: reports,
    count: reports.length,
    totalInSheet: data.length - 1,
    source: 'google-sheets',
    lastUpdated: new Date().toISOString()
  };
}

/**
 * Add a new report to the sheet
 */
function addReport(data) {
  // Validate required fields
  const required = ['commodity', 'shop', 'reported', 'area', 'severity'];
  for (const field of required) {
    if (!data[field]) {
      throw new Error('Missing required field: ' + field);
    }
  }

  const sheet = getOrCreateSheet();

  // Generate ID
  const id = 'r' + Date.now();
  const time = new Date();

  const row = [
    id,
    data.commodity || '',
    data.shop || '',
    data.area || '',
    parseFloat(data.official) || 0,
    parseFloat(data.reported) || 0,
    data.severity || 'moderate',
    data.notes || '',
    time,
    0, // upvotes
    data.icon || '📦'
  ];

  sheet.appendRow(row);

  return {
    success: true,
    id: id,
    message: 'Report submitted successfully',
    timestamp: time.toISOString()
  };
}

/**
 * Get aggregated statistics
 */
function getStats() {
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) {
    return {
      totalReports: 0,
      mfiScore: 100,
      mfiLabel: 'No Data',
      areaBreakdown: {},
      commodityBreakdown: {},
      severityBreakdown: {},
      source: 'google-sheets'
    };
  }

  const headers = data[0];
  const reports = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const report = {};
    headers.forEach((h, idx) => {
      report[h] = row[idx];
    });
    reports.push(report);
  }

  // Area breakdown
  const areaBreakdown = {};
  reports.forEach(r => {
    areaBreakdown[r.area] = (areaBreakdown[r.area] || 0) + 1;
  });

  // Commodity breakdown
  const commodityBreakdown = {};
  reports.forEach(r => {
    commodityBreakdown[r.commodity] = (commodityBreakdown[r.commodity] || 0) + 1;
  });

  // Severity breakdown
  const severityBreakdown = { moderate: 0, severe: 0, extreme: 0, shortage: 0 };
  reports.forEach(r => {
    if (severityBreakdown[r.severity] !== undefined) {
      severityBreakdown[r.severity]++;
    }
  });

  // Calculate MFI
  const mfi = calculateMFI(reports);

  return {
    totalReports: reports.length,
    uniqueAreas: Object.keys(areaBreakdown).length,
    mfiScore: mfi.score,
    mfiLabel: mfi.label,
    areaBreakdown: areaBreakdown,
    commodityBreakdown: commodityBreakdown,
    severityBreakdown: severityBreakdown,
    source: 'google-sheets',
    lastUpdated: new Date().toISOString()
  };
}

// ============================================================
// MFI CALCULATION (mirrors frontend algorithm)
// ============================================================

function calculateMFI(reports) {
  if (reports.length === 0) return { score: 100, label: 'No Data' };

  // Violation Rate (40%)
  const violations = reports.filter(r => r.reported > r.official && r.official > 0);
  const violationRate = (violations.length / reports.length) * 100;

  // Average Deviation (35%)
  let totalDev = 0, devCount = 0;
  reports.forEach(r => {
    if (r.official > 0 && r.reported > r.official) {
      totalDev += ((r.reported - r.official) / r.official) * 100;
      devCount++;
    }
  });
  const avgDev = devCount > 0 ? totalDev / devCount : 0;

  // Severity (15%)
  let sevSum = 0;
  reports.forEach(r => {
    if (r.severity === 'extreme') sevSum += 3;
    else if (r.severity === 'severe') sevSum += 2;
    else if (r.severity === 'moderate') sevSum += 1;
  });
  const sevPenalty = (sevSum / reports.length / 3) * 100;

  // Volume (10%)
  const volConf = reports.length >= 5 ? 100 : (reports.length / 5) * 100;

  const penalty = (violationRate * 0.40) + (Math.min(avgDev, 100) * 0.35) + (sevPenalty * 0.15) + ((100 - volConf) * 0.10);
  const score = Math.max(0, Math.min(100, Math.round(100 - penalty)));

  let label;
  if (score >= 80) label = 'Healthy';
  else if (score >= 60) label = 'Caution';
  else if (score >= 40) label = 'Warning';
  else label = 'Critical';

  return { score, label };
}

// ============================================================
// HELPERS
// ============================================================

/**
 * Get or create the Reports sheet with proper headers
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Set headers
    const headers = ['id', 'commodity', 'shop', 'area', 'official', 'reported', 'severity', 'notes', 'time', 'upvotes', 'icon'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Send JSON response with CORS headers
 */
function sendJSON(data, status) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// SETUP HELPER (run once manually)
// ============================================================

/**
 * Run this function once from the Apps Script editor to set up the sheet.
 * Go to: Run → setup
 */
function setup() {
  const sheet = getOrCreateSheet();
  Logger.log('Sheet "' + SHEET_NAME + '" is ready!');
  Logger.log('Sheet URL: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());
  Logger.log('Now deploy as Web App: Deploy → New deployment → Web app');
  Logger.log('Set: Execute as = Me, Who has access = Anyone');
}
