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

## Google Sheets Backend Setup (Coming in v1.0)
Instructions for setting up the Google Sheets real-time database will be added here.

## EmailJS Setup (Coming in v1.0)
Instructions for direct complaint email functionality will be added here.

## Need Help?
- Open an issue on the main repo
- Email: aswinibehera666@gmail.com
