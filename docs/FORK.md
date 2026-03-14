# Fork SupplySentinel for Your District

Deploy a price transparency platform for your district in **5 minutes**. No coding required.

## Quick Start (5 Steps)

### 1. Fork the Repository
Click **[Fork](https://github.com/Ab-aswini/Supplysentinel/fork)** on GitHub.

### 2. Create Your District Config
1. Copy `config/_template.json` to `config/your-district.json`
2. Edit these fields:

| Field | What to Change | Example |
|-------|---------------|---------|
| `district` | Your district name | `"Puri"` |
| `state` | Your state | `"Odisha"` |
| `liveUrl` | Your deployment URL | `"https://puri-sentinel.netlify.app"` |
| `repoUrl` | Your fork URL | `"https://github.com/you/Supplysentinel"` |
| `areas` | Local market areas | `["Grand Road", "Station Bazaar", ...]` |
| `hotspots` | Same areas (with `"level": "low"`) | Match your areas list |
| `officialContacts` | DC name + email | Find at `district.nic.in` |
| `commodities` | Update prices if different | Check `consumeraffairs.nic.in` |

### 3. Point the App to Your Config
In `index.html`, change one line:
```javascript
const CONFIG_PATH = 'config/your-district.json';
```

### 4. Register Your District (Optional)
Add your district to `config/districts.json`:
```json
{
  "id": "puri",
  "name": "Puri",
  "state": "Odisha",
  "config": "config/puri.json",
  "active": true
}
```

### 5. Deploy Free
**Option A — Netlify** (recommended):
1. Sign up at [netlify.com](https://www.netlify.com) with GitHub
2. Import your fork → Deploy
3. Live in 30 seconds

**Option B — GitHub Pages**:
1. Settings → Pages → Deploy from branch → main → Save
2. Live at `https://you.github.io/Supplysentinel`

## What You Get
- Real-time price violation reporting
- Market Fairness Index (MFI) for your district
- Hotspot tracking with area filtering
- Formal complaint generator (WhatsApp + Email + DC Report)
- AI-powered market analysis (Gemini)
- Odia + English language support
- Photo evidence upload
- PWA with offline support
- Google Sheets backend (optional)

## Optional Enhancements

### Activate Crisis Mode
In your config JSON:
```json
"crisis": {
  "active": true,
  "commodity": "LPG Cylinder (14.2kg)",
  "officialPrice": 939,
  "blackMarketPrice": 2500,
  "message": "LPG black market pricing detected..."
}
```

### Add Seed Reports
Pre-populate with known violations:
```json
"seedReports": [
  {
    "id": "r1",
    "commodity": "LPG Cylinder (14.2kg)",
    "shop": "Shop Name",
    "area": "Area Name",
    "official": 939,
    "reported": 2000,
    "severity": "extreme",
    "notes": "Details...",
    "hoursAgo": 2,
    "upvotes": 5,
    "icon": "🔥"
  }
]
```

### Connect Google Sheets
See [DEPLOY.md](DEPLOY.md#google-sheets-backend-setup-optional--shared-database) for setup.

### Enable Email Complaints
See [DEPLOY.md](DEPLOY.md#emailjs-setup-optional--direct-email-complaints) for EmailJS setup.

## Finding Official Prices
| Source | URL | What |
|--------|-----|------|
| PPAC | ppac.gov.in | LPG, Petrol, Diesel |
| Consumer Affairs | consumeraffairs.nic.in/price-monitoring-cell | Rice, Dal, Oil, Sugar |
| State Civil Supplies | Check your state portal | PDS prices |

## URL Parameters
You can switch districts via URL: `?district=puri`

This loads `config/puri.json` automatically — useful for multi-district deployments on a single site.

## Need Help?
- Open an [issue](https://github.com/Ab-aswini/Supplysentinel/issues)
- Email: aswinibehera666@gmail.com
