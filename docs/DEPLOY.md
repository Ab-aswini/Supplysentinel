# Deploy SupplySentinel for Your District

Get SupplySentinel running for your district in under 10 minutes. Zero cost. No coding experience required.

## Prerequisites
- A GitHub account (free)
- 10 minutes of your time

## Step-by-Step Setup

### Step 1: Fork the Repository
1. Go to [github.com/Ab-aswini/Supplysentinel](https://github.com/Ab-aswini/Supplysentinel)
2. Click the **"Fork"** button (top right)
3. This creates your own copy of the project

### Step 2: Edit Your District Config
1. Open `config/balangir.json` in your forked repo
2. Click the pencil icon to edit
3. Change these 5 fields:
   - `"district"` — your district name
   - `"state"` — your state name
   - `"areas"` — list of areas/localities in your district
   - `"officialContacts"` — your District Collector and Civil Supplies Officer details
   - `"commodities"` — update prices if they differ in your region
4. Save the file (commit changes)

### Step 3: Enable GitHub Pages
1. Go to your fork's **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 4: Deploy on Netlify (Recommended)
1. Go to [netlify.com](https://www.netlify.com/) and sign up with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your forked repository
4. Deploy settings: Branch = `main`, Build = leave blank, Publish directory = `/`
5. Click **Deploy site**
6. Your site is live! Optionally set a custom subdomain under Site settings > Domain management

> The main instance is live at: [supplysentinel.netlify.app](https://supplysentinel.netlify.app)

### Step 5 (Alternative): GitHub Pages
1. Go to your fork's **Settings** tab → **Pages**
2. Source: **Deploy from a branch** → **main** → **/ (root)** → **Save**
3. Live at: `https://YOUR-USERNAME.github.io/Supplysentinel`

## Google Sheets Backend Setup (Optional — Shared Database)

By default, SupplySentinel stores reports in `localStorage` (per-browser). To enable a **shared, persistent database** so all visitors see the same reports, set up the free Google Sheets backend.

### Step A: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet
2. Name it **"SupplySentinel Reports"** (or anything you like)
3. Keep the default "Sheet1" tab — the script will create a "Reports" tab automatically

### Step B: Add the Apps Script
1. In your spreadsheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script/Code.gs` from this repo and paste it in
4. Click **Save** (Ctrl+S) and name the project **"SupplySentinel Backend"**

### Step C: Run Initial Setup
1. In the Apps Script editor, select the **`setup`** function from the dropdown (next to the Run button)
2. Click **Run**
3. When prompted, **authorize** the script to access your spreadsheet
4. Check the **Execution log** — you should see "Sheet 'Reports' is ready!"

### Step D: Deploy as Web App
1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Set these options:
   - **Description**: "SupplySentinel API v1"
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

### Step E: Connect to Your Frontend
1. Open `index.html` in your repo
2. Find the line:
   ```javascript
   const SHEETS_API_URL = '';
   ```
3. Paste your Web app URL:
   ```javascript
   const SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```
4. Commit and push. Your site now reads/writes to Google Sheets!

### How It Works
- **GET `?action=reports`** — Returns all reports as JSON
- **GET `?action=stats`** — Returns aggregated statistics with MFI score
- **POST (JSON body)** — Adds a new report row to the sheet

The frontend tries Sheets first, falls back to localStorage if the API is unavailable. A **"Live Data"** badge appears in the header when Sheets is connected.

### Troubleshooting
- **"Authorization required"**: Re-run the `setup` function and accept permissions
- **CORS errors**: Make sure "Who has access" is set to "Anyone" (not "Anyone with Google account")
- **No data showing**: Check the Execution log in Apps Script for errors
- **Want to update the script?**: Go to Deploy → Manage deployments → Edit → select "New version" → Deploy

## EmailJS Setup (Optional — Direct Email Complaints)

Enable citizens to email formal complaints directly to the District Collector with one click.

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free tier = 200 emails/month)
2. In the dashboard, go to **Email Services** → **Add New Service**
3. Connect your Gmail/Outlook account (this will be the "from" address)
4. Note your **Service ID** (e.g. `service_abc123`)

### Step 2: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set the template fields:
   - **To email**: `{{to_email}}`
   - **From name**: `{{from_name}}`
   - **Reply to**: `{{from_email}}`
   - **Subject**: `{{subject}}`
   - **Body**:
     ```
     {{message}}

     ---
     Sent via SupplySentinel ({{site_url}})
     District: {{district}} | Reports: {{report_count}}
     ```
3. Click **Save** and note your **Template ID** (e.g. `template_xyz789`)

### Step 3: Get Public Key
1. Go to **Account** → **General** tab
2. Copy your **Public Key** (e.g. `abc123XYZ`)

### Step 4: Configure in index.html
1. Find these lines in `index.html`:
   ```javascript
   const EMAILJS_PUBLIC_KEY = '';
   const EMAILJS_SERVICE_ID = '';
   const EMAILJS_TEMPLATE_ID = '';
   ```
2. Fill them in:
   ```javascript
   const EMAILJS_PUBLIC_KEY = 'abc123XYZ';
   const EMAILJS_SERVICE_ID = 'service_abc123';
   const EMAILJS_TEMPLATE_ID = 'template_xyz789';
   ```
3. Commit and push. The "📧 Email to Collector" button is now active!

### How It Works
- User clicks "📧 Email to Collector" in the complaint section
- Reviews the auto-generated formal complaint letter
- Optionally enters their name and email (for reply)
- Clicks "📧 Send Email" — complaint sent via EmailJS
- **Fallback**: If EmailJS is not configured, opens the default email client with `mailto:`

## Need Help?
- Open an issue on the main repo
- Email: aswinibehera666@gmail.com
