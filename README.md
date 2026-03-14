<p align="center">
  <img src="https://img.shields.io/badge/STATUS-LIVE%20MVP-ff4d1c?style=for-the-badge&labelColor=0a0c0f" alt="Status: Live MVP">
  <img src="https://img.shields.io/badge/LICENSE-MIT-00e676?style=for-the-badge&labelColor=0a0c0f" alt="License: MIT">
  <img src="https://img.shields.io/badge/COST-₹0%20FOREVER-ffd740?style=for-the-badge&labelColor=0a0c0f" alt="Cost: Zero">
  <img src="https://img.shields.io/badge/FOR-EVERY%20DISTRICT%20IN%20INDIA-ff8c42?style=for-the-badge&labelColor=0a0c0f" alt="For Every District">
</p>

<h1 align="center">SupplySentinel</h1>
<h3 align="center">India's Open-Source Weapon Against Black Marketing</h3>

<p align="center">
  <strong>A citizen-powered price transparency platform that lets any Indian district<br>
  expose, track, and fight black marketing of essential commodities — for free, forever.</strong>
</p>

<p align="center">
  <a href="https://supplysentinel.netlify.app">
    <img src="https://img.shields.io/badge/🔴%20LIVE%20DEMO-Balangir%20Edition-ff4d1c?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0c0f" alt="Live Demo — Balangir">
  </a>
</p>

<p align="center">
  <em>Born in Balangir, Odisha. Built for 780+ districts across India.</em>
</p>

---

## India Has a Black Market Problem

Every time a supply chain crisis hits — a global oil shock, a transport strike, a monsoon disruption — the same story repeats across India:

```mermaid
flowchart TD
    A["🏪 Essential commodities DISAPPEAR\nfrom fair-price shops"] --> B["💰 REAPPEAR on black market\nat 2x – 3x official price"]
    B --> C["👨‍👩‍👧‍👦 Families earning ₹200–300/day\nare FORCED to overpay"]
    C --> D["🏛️ Authorities DON'T KNOW\nNo real-time ground data"]
    D --> E["🔄 Middlemen PROFIT\nCitizens SUFFER\nThe cycle REPEATS"]
    E -->|"SupplySentinel\nbreaks this cycle"| F["📊 Citizens report → Data aggregates\n→ Authorities act"]

    style A fill:#1a1a2e,stroke:#ff4d1c,color:#fff
    style B fill:#1a1a2e,stroke:#ff1744,color:#fff
    style C fill:#1a1a2e,stroke:#ffd740,color:#fff
    style D fill:#1a1a2e,stroke:#ff8c42,color:#fff
    style E fill:#1a1a2e,stroke:#ff1744,color:#fff
    style F fill:#0a2e0a,stroke:#00e676,color:#fff
```

**There is no nationwide system for citizens to report, aggregate, and escalate price violations at the speed they happen.** SupplySentinel is that system.

---

## The Balangir Story — Where It Started

### March 2026, Balangir District, Odisha

```mermaid
block-beta
    columns 3
    block:official["🏛️ OFFICIAL PRICE"]:1
        LPG1["LPG ₹939"]
        Oil1["Mustard Oil ₹145"]
        Onion1["Onion ₹40"]
        Tomato1["Tomato ₹35"]
    end
    block:arrow["⚡ BLACK MARKET"]:1
        gap1["→ ₹2,500+ (167%↑)"]
        gap2["→ ₹210 (45%↑)"]
        gap3["→ ₹65 (63%↑)"]
        gap4["→ ₹80 (129%↑)"]
    end
    block:impact["💔 HUMAN COST"]:1
        cost1["A worker's ENTIRE\nWEEK'S salary\nfor ONE LPG cylinder"]
    end

    style official fill:#0d2818,stroke:#00e676,color:#e8eaf0
    style arrow fill:#2e1a0a,stroke:#ff4d1c,color:#e8eaf0
    style impact fill:#2e0a0a,stroke:#ff1744,color:#e8eaf0
```

When this crisis hit Balangir, there was **no way** for citizens to:
- Report overpricing anonymously (without fear of retaliation)
- See if others in their area faced the same problem
- Generate evidence strong enough for authorities to act
- Alert their community in real time

**So we built SupplySentinel.** The Balangir edition is live at [supplysentinel.netlify.app](https://supplysentinel.netlify.app) — designed so that **any district in India** can deploy their own version in under 10 minutes.

> *"When a daily-wage worker pays ₹2,500 for a ₹939 LPG cylinder, that's not just inflation — that's exploitation. SupplySentinel gives citizens a weapon: DATA."*
> — **Aswini Behera**, Creator, Balangir, Odisha

---

## How It Works

### The Citizen Data Pipeline

```mermaid
flowchart LR
    subgraph STEP1["📝 STEP 1: REPORT"]
        A1["Citizen sees\noverpricing"]
        A2["Opens app\n(no login needed)"]
        A3["Submits report\nanonymously"]
        A1 --> A2 --> A3
    end

    subgraph STEP2["✅ STEP 2: VALIDATE"]
        B1["Platform checks\nagainst official\nMRP data"]
        B2["Report appears\nin live feed"]
        B3["Community\nupvotes to\nconfirm"]
        B1 --> B2 --> B3
    end

    subgraph STEP3["📊 STEP 3: ANALYZE"]
        C1["Market Fairness\nIndex updates"]
        C2["Hotspot grid\nshows affected\nareas"]
        C3["Severity auto-\ngraded"]
        C1 --> C2 --> C3
    end

    subgraph STEP4["⚡ STEP 4: ACT"]
        D1["DC complaint\nletter auto-\ngenerated"]
        D2["Sent to District\nCollector"]
        D3["WhatsApp alert\nspreads to\ncommunity"]
        D1 --> D2 --> D3
    end

    STEP1 --> STEP2 --> STEP3 --> STEP4

    style STEP1 fill:#111318,stroke:#ff8c42,color:#e8eaf0
    style STEP2 fill:#111318,stroke:#00e676,color:#e8eaf0
    style STEP3 fill:#111318,stroke:#ffd740,color:#e8eaf0
    style STEP4 fill:#111318,stroke:#ff4d1c,color:#e8eaf0
```

### What Makes This Different?

```mermaid
flowchart TB
    subgraph existing["❌ EXISTING SYSTEMS"]
        E1["Consumer Helpline\n1800-11-4000\n<i>Slow, one complaint\nat a time, no aggregation</i>"]
        E2["Social Media Posts\n'LPG price high!'\n<i>Scattered, no verification,\nno official follow-up</i>"]
        E3["Govt Price Portals\n<i>Top-down only,\nno ground truth</i>"]
        E4["RTI / Legal Routes\n<i>Weeks to months,\nrequires legal knowledge</i>"]
    end

    subgraph ss["✅ SUPPLYSENTINEL"]
        S1["Instant aggregation\nPattern detection\nacross the district"]
        S2["Structured data\nMRP auto-compared\nEvidence-grade reports"]
        S3["Bottom-up + top-down\nGround truth from\nactual buyers"]
        S4["Real-time\nAuto-generates formal\nDC complaint letters"]
    end

    E1 -.->|"replaced by"| S1
    E2 -.->|"replaced by"| S2
    E3 -.->|"enhanced by"| S3
    E4 -.->|"accelerated by"| S4

    style existing fill:#1a0a0a,stroke:#ff1744,color:#e8eaf0
    style ss fill:#0a1a0a,stroke:#00e676,color:#e8eaf0
```

---

## The Market Fairness Index (MFI)

The core intelligence of SupplySentinel. A single **0–100 score** that answers: *"Is my local market fair right now?"*

```mermaid
pie title MFI Penalty Weight Distribution
    "Violation Rate (40%)" : 40
    "Average Deviation (35%)" : 35
    "Severity Multiplier (15%)" : 15
    "Volume Confidence (10%)" : 10
```

### How It's Calculated

```mermaid
flowchart LR
    subgraph inputs["📥 INPUTS"]
        I1["All citizen\nprice reports"]
        I2["Official MRP\ndata"]
    end

    subgraph calc["🔢 CALCULATION"]
        C1["Violation Rate (40%)\nWhat % exceed MRP?"]
        C2["Avg Deviation (35%)\nHow far above MRP?"]
        C3["Severity (15%)\nExtreme=3x, Severe=2x"]
        C4["Confidence (10%)\n<5 reports = less sure"]
        C5["Weighted\nPenalty"]
        C1 --> C5
        C2 --> C5
        C3 --> C5
        C4 --> C5
    end

    subgraph score["📊 SCORE"]
        S1["MFI = 100 - Penalty"]
    end

    inputs --> calc --> score

    style inputs fill:#111318,stroke:#63b3ed,color:#e8eaf0
    style calc fill:#111318,stroke:#ffd740,color:#e8eaf0
    style score fill:#111318,stroke:#00e676,color:#e8eaf0
```

### Score Interpretation

```mermaid
flowchart LR
    G["🟢 80–100\nHEALTHY\nPrices near MRP"] ~~~ Y["🟡 60–79\nMINOR ANOMALIES\nWatch closely"]
    Y ~~~ A["🟠 40–59\nMARKET STRESS\n→ Alert Civil Supplies"]
    A ~~~ R["🔴 < 40\nCRITICAL\n→ Escalate to DC"]

    style G fill:#0d2818,stroke:#00e676,color:#e8eaf0
    style Y fill:#2e2a0a,stroke:#ffd740,color:#e8eaf0
    style A fill:#2e1a0a,stroke:#ff8c42,color:#e8eaf0
    style R fill:#2e0a0a,stroke:#ff1744,color:#e8eaf0
```

> **Balangir right now: MFI = 38/100 — 🔴 CRITICAL**
> LPG supply constrained, active black marketing detected in Gandhi Chowk, Bus Stand Area, Cantonment Road.

---

## Platform Vision — The Full Picture

### MVP (Live Now) vs. v1.0 (Building)

```mermaid
flowchart TB
    subgraph mvp["✅ MVP — LIVE NOW"]
        M1["📝 Anonymous\nReporting"]
        M2["📡 Live Report\nFeed"]
        M3["👍 Community\nUpvoting"]
        M4["📊 MRP vs Market\nComparison"]
        M5["🎯 Market Fairness\nIndex"]
        M6["🗺️ Hotspot\nGrid"]
        M7["📄 DC Complaint\nGenerator"]
        M8["💬 WhatsApp\nSharing"]
    end

    subgraph v1["🔨 v1.0 — IN DEVELOPMENT"]
        V1["☁️ Google Sheets\nBackend"]
        V2["🇮🇳 Odia Language\nToggle"]
        V3["🤖 AI Supply\nExplainer"]
        V4["📷 Photo Evidence\nUpload"]
        V5["📱 PWA + Offline\nMode"]
        V6["📧 Direct Email\nComplaints"]
        V7["🏛️ Multi-District\nFork System"]
    end

    mvp -->|"upgrading to"| v1

    style mvp fill:#0d2818,stroke:#00e676,color:#e8eaf0
    style v1 fill:#111318,stroke:#ff8c42,color:#e8eaf0
```

### System Architecture

```mermaid
flowchart TB
    subgraph phone["📱 CITIZEN'S PHONE (Low-end Android, Chrome)"]
        subgraph app["index.html — Single-file PWA"]
            RF["Report\nForm"]
            LF["Live\nFeed"]
            MH["Market\nHealth"]
            HG["Hotspot\nGrid"]
            CG["Complaint\nGenerator"]
        end
        LS["💾 localStorage\n(offline fallback)"]
        app <--> LS
    end

    subgraph cloud["☁️ CLOUD SERVICES (All Free Tier)"]
        GS["📊 Google Sheets\n(Database)\nApps Script API\nFREE"]
        GM["🤖 Gemini 1.5 Flash\n(AI Explainer)\n15 RPM FREE"]
        EJ["📧 EmailJS\n(Complaints)\n200/month FREE"]
        CL["🖼️ Cloudinary\n(Photo Storage)\n25GB FREE"]
    end

    subgraph host["🌐 HOSTING"]
        GP["GitHub Pages\nStatic · FREE\nZero config"]
    end

    app <-->|"reports & data"| GS
    app <-->|"'Why is LPG scarce?'"| GM
    app -->|"send complaint"| EJ
    app -->|"upload photo"| CL
    GP -->|"serves"| phone

    EJ -->|"delivers to"| DC["🏛️ District Collector\n& Civil Supplies Officer"]

    style phone fill:#111318,stroke:#63b3ed,color:#e8eaf0
    style cloud fill:#111318,stroke:#ff8c42,color:#e8eaf0
    style host fill:#111318,stroke:#00e676,color:#e8eaf0
    style DC fill:#1a1a2e,stroke:#ffd740,color:#e8eaf0
```

---

## User Journey — A Citizen in Balangir

```mermaid
flowchart TD
    START["👩 A woman in Gandhi Chowk, Balangir\npaid ₹2,500 for a ₹939 LPG cylinder"] --> OPEN["📱 Opens SupplySentinel\non her Android phone\n(no signup, no login, no download)"]

    OPEN --> REPORT["📝 REPORTS the violation\n━━━━━━━━━━━━━━━━━━━━\nCommodity: LPG Cylinder\nShop: Mahesh Gas Agency\nArea: Gandhi Chowk\nMRP: ₹939 (auto-filled)\nPaid: ₹2,500\nMarkup: +167% EXTREME\nPhoto: 📷 receipt attached"]

    REPORT --> FEED["📡 Report appears in LIVE FEED\nNeighbors see it → upvote\n'Yes, same happened to me'\n3 upvotes = validated evidence"]

    FEED --> SCORE["📊 MARKET FAIRNESS INDEX\nupdates: 42 → 38 (CRITICAL 🔴)\nGandhi Chowk glows red\non HOTSPOT GRID"]

    SCORE --> COMPLAINT["📄 She taps 'Generate DC Report'\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nFORMAL COMPLAINT auto-generated\nTo: District Collector, Balangir\nCC: Civil Supplies Officer\nEvidence: 5 reports, 12 confirmations\nUnder: Essential Commodities Act, 1955"]

    COMPLAINT --> SHARE["💬 She taps 'Share via WhatsApp'\n'🚨 BALANGIR MARKET ALERT —\nLPG at ₹2,500 in Gandhi Chowk...'\nAlert spreads to family groups"]

    SHARE --> LOOP["🔄 More citizens report\n→ stronger evidence\n→ authorities act\n→ prices normalize"]

    style START fill:#2e0a0a,stroke:#ff1744,color:#e8eaf0
    style OPEN fill:#111318,stroke:#63b3ed,color:#e8eaf0
    style REPORT fill:#111318,stroke:#ff8c42,color:#e8eaf0
    style FEED fill:#111318,stroke:#ffd740,color:#e8eaf0
    style SCORE fill:#1a1a2e,stroke:#ff1744,color:#e8eaf0
    style COMPLAINT fill:#111318,stroke:#ff4d1c,color:#e8eaf0
    style SHARE fill:#111318,stroke:#00e676,color:#e8eaf0
    style LOOP fill:#0d2818,stroke:#00e676,color:#e8eaf0
```

---

## The India Opportunity

```mermaid
mindmap
  root((SupplySentinel\nfor India))
    780+ Districts
      Each vulnerable to\nblack marketing\nduring supply crises
    1 Codebase
      Fork → 5 edits → Deploy
      Zero cost forever
    Real Examples
      🔥 Balangir: LPG hoarding
      🧅 Cuttack: Onion crisis
      ⛽ Jaipur: Fuel shortage
      🌾 Patna: Rice diversion
      🍅 Chennai: Tomato strike
    Open Source
      No one controls it
      No one can shut it down
      Community-owned data
```

### Commodities Tracked (Balangir Example)

Each district customizes this list via config. Here's what Balangir tracks:

| Commodity | Official MRP | Unit | Source |
|-----------|-------------|------|--------|
| LPG Cylinder (14.2kg) | ₹939 | per cylinder | [PPAC](https://ppac.gov.in) |
| Mustard Oil | ₹145 | per liter | [Consumer Affairs](https://consumeraffairs.nic.in/price-monitoring-cell) |
| Sugar | ₹42 | per kg | Consumer Affairs |
| Rice | ₹38 | per kg | [Food Odisha](http://www.foododisha.in) |
| Wheat Atta | ₹35 | per kg | Consumer Affairs |
| Onion | ₹40 | per kg | Consumer Affairs |
| Tomato | ₹35 | per kg | Consumer Affairs |
| Toor Dal | ₹155 | per kg | Consumer Affairs |
| Petrol | ₹105 | per liter | [PPAC](https://ppac.gov.in) |

*Prices as of March 2026 for Odisha. Other states update via their own config file.*

---

## Development Roadmap

```mermaid
gantt
    title SupplySentinel — Road to v1.0
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Phase 1: Foundation
    Repo Structure           :done, t1, 2026-03-14, 1d
    README & Vision          :done, t2, 2026-03-14, 1d
    Config Extraction        :active, t3, 2026-03-15, 2d

    section Phase 2: Real-Time Data
    Google Sheets Backend    :t4, after t3, 3d

    section Phase 3: Accessibility
    Odia Language Toggle     :t5, after t4, 2d

    section Phase 4: Intelligence
    AI Supply Explainer      :t6, after t5, 2d

    section Phase 5: Evidence
    Photo Evidence Upload    :t7, after t6, 2d

    section Phase 6: Mobile
    PWA + Offline Mode       :t8, after t7, 3d

    section Phase 7: Direct Action
    Email Complaints         :t9, after t8, 2d

    section Phase 8: National Scale
    Multi-District Forks     :t10, after t9, 2d
```

### Detailed Task Breakdown

| Phase | Task | Status | Description |
|-------|------|--------|-------------|
| **1. Foundation** | Repo Structure | ✅ Done | `config/`, `data/`, `docs/`, LICENSE |
| | README & Vision | ✅ Done | You're reading it |
| | Config Extraction | ⬜ Next | `balangir.json` powers everything |
| **2. Real-Time Data** | Google Sheets Backend | ⬜ Planned | Replace localStorage with shared DB |
| **3. Accessibility** | Odia Language | ⬜ Planned | `[EN \| ଓଡ଼ିଆ]` full translation |
| **4. Intelligence** | AI Explainer | ⬜ Planned | Gemini-powered crisis explanations |
| **5. Evidence** | Photo Upload | ⬜ Planned | Camera → attach to reports |
| **6. Mobile** | PWA + Offline | ⬜ Planned | Installable, works without internet |
| **7. Direct Action** | Email Complaints | ⬜ Planned | One-click send to DC via EmailJS |
| **8. National Scale** | Multi-District | ⬜ Planned | Fork → 5 edits → deployed |

---

## Deploy for Your District

```mermaid
flowchart LR
    A["🍴 Fork\nthe repo"] --> B["📝 Edit\n5 fields in\nconfig JSON"]
    B --> C["🚀 Push\nto GitHub"]
    C --> D["⚙️ Enable\nGitHub Pages"]
    D --> E["✅ LIVE\nYour district\nis protected"]

    style A fill:#111318,stroke:#63b3ed,color:#e8eaf0
    style B fill:#111318,stroke:#ff8c42,color:#e8eaf0
    style C fill:#111318,stroke:#ffd740,color:#e8eaf0
    style D fill:#111318,stroke:#ff4d1c,color:#e8eaf0
    style E fill:#0d2818,stroke:#00e676,color:#e8eaf0
```

### The 5 Fields to Change

| # | Field | Balangir (example) | Your District |
|---|-------|--------------------|---------------|
| 1 | `"district"` | `"Balangir"` | `"Cuttack"` |
| 2 | `"state"` | `"Odisha"` | `"Odisha"` |
| 3 | `"areas"` | `["Gandhi Chowk", ...]` | `["Buxi Bazaar", ...]` |
| 4 | `"officialContacts"` | Balangir DC email | Your DC's email |
| 5 | `"commodities"` | Odisha prices | Your state's prices |

```bash
# Quick Start
git clone https://github.com/YOUR-USERNAME/Supplysentinel.git
cp config/balangir.json config/your-district.json
# Edit the 5 fields → push → enable Pages → LIVE
```

See [docs/DEPLOY.md](docs/DEPLOY.md) for step-by-step instructions.

---

## Deployed Instances

| District | State | Maintainer | Status | Link |
|----------|-------|------------|--------|------|
| Balangir | Odisha | [@Ab-aswini](https://github.com/Ab-aswini) | 🔴 LIVE | [Visit](https://supplysentinel.netlify.app) |

> **Deployed for your district?** Add a row and submit a PR. Let's build a national network.

---

## Tech Stack

```mermaid
flowchart TB
    subgraph frontend["🖥️ FRONTEND"]
        HTML["HTML5"]
        CSS["CSS3 Variables"]
        JS["Vanilla JS"]
        FONTS["Syne · IBM Plex Sans · Space Mono"]
    end

    subgraph backend["☁️ BACKEND (All Free Tier)"]
        GS["Google Sheets\n(Database)"]
        EJ["EmailJS\n(200 emails/mo)"]
        GM["Gemini 1.5 Flash\n(AI, 15 RPM)"]
        CL["Cloudinary\n(Images, 25GB)"]
    end

    subgraph hosting["🌐 HOSTING"]
        GP["GitHub Pages\nFREE forever"]
    end

    frontend --> GP
    GP <--> backend

    style frontend fill:#111318,stroke:#63b3ed,color:#e8eaf0
    style backend fill:#111318,stroke:#ff8c42,color:#e8eaf0
    style hosting fill:#0d2818,stroke:#00e676,color:#e8eaf0
```

<p align="center"><strong>No npm. No build tools. No frameworks. No paid services. Total cost: ₹0/month.</strong></p>

---

## Screenshots

> Screenshots will be added after v1.0 UI polish. For now, visit the live demo.

| Dashboard & Market Health | Report Form & Live Feed | Hotspot Grid & Complaint |
|---------------------------|-------------------------|--------------------------|
| [Live Demo](https://supplysentinel.netlify.app) | [Live Demo](https://supplysentinel.netlify.app) | [Live Demo](https://supplysentinel.netlify.app) |

---

## Contributing

This is a citizen utility, not a tech showcase. We need:

| Role | How You Can Help |
|------|-----------------|
| **Developers** | Vanilla HTML/CSS/JS only. See [CONTRIBUTING.md](docs/CONTRIBUTING.md) |
| **Translators** | Hindi, Odia, Telugu, Tamil, Bengali, Marathi, Kannada... |
| **Citizens** | Deploy for your district. Report prices. Spread awareness |
| **Data Verifiers** | Keep official MRP data current from govt sources |
| **Designers** | Mobile UX improvements for low-end Android phones |

---

## Why Open Source?

> Black markets thrive on **information asymmetry**. Citizens can't see what others are paying. Authorities can't see what's happening on the ground. Middlemen exploit the gap.
>
> SupplySentinel is open source because **price transparency shouldn't be a luxury — it should be public infrastructure.**
>
> No single entity controls it. No one can shut it down. No one profits from it. The code is free. The hosting is free. The data belongs to citizens.
>
> **The fight against black marketing is a collective fight. Open source makes it collective by design.**

---

## Official Data Sources

| Source | URL | Provides |
|--------|-----|----------|
| PPAC (Petroleum Planning) | [ppac.gov.in](https://ppac.gov.in) | LPG, Petrol, Diesel prices |
| Consumer Affairs Ministry | [consumeraffairs.nic.in](https://consumeraffairs.nic.in/price-monitoring-cell) | Essential commodity MRPs |
| Odisha Food Supplies | [foododisha.in](http://www.foododisha.in) | State PDS & ration prices |
| National Consumer Helpline | **1800-11-4000** (toll-free) | Complaint registration |

---

## Contact

| | |
|---|---|
| **Creator** | Aswini Behera |
| **Email** | aswinibehera666@gmail.com |
| **Location** | Balangir, Odisha, India |
| **Repo** | [github.com/Ab-aswini/Supplysentinel](https://github.com/Ab-aswini/Supplysentinel) |
| **Live Demo** | [supplysentinel.netlify.app](https://supplysentinel.netlify.app) |

---

<p align="center">
  <strong>Born in Balangir. Built for India.</strong><br>
  <em>Because no family — anywhere — should pay ₹2,500 for a ₹939 cylinder.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/ORIGIN-BALANGIR%2C%20ODISHA-ff8c42?style=for-the-badge&labelColor=0a0c0f" alt="Origin: Balangir">
  <img src="https://img.shields.io/badge/SCOPE-ALL%20OF%20INDIA-ff4d1c?style=for-the-badge&labelColor=0a0c0f" alt="Scope: All of India">
  <img src="https://img.shields.io/badge/BUILT%20WITH-%E2%9D%A4%EF%B8%8F%20%26%20DATA-00e676?style=for-the-badge&labelColor=0a0c0f" alt="Built with love and data">
</p>
