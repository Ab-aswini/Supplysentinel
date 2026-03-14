# Product Requirements Document — SupplySentinel

**Balangir Edition | AI-Powered Market Integrity & Crisis Management Platform**

| | |
|---|---|
| **Document Version** | v1.0 — Initial PRD |
| **Status** | DRAFT — Ready for Review |
| **Author** | Aswini Behera, Founder & Lead Developer |
| **Organization** | SupplySentinel (Open Source) |
| **Location** | Balangir, Odisha — 767070 |
| **Contact** | aswinibehera666@gmail.com |
| **Date** | March 2026 |
| **License** | MIT Open Source — Contributions Welcome |
| **GitHub** | [github.com/Ab-aswini/Supplysentinel](https://github.com/Ab-aswini/Supplysentinel) |
| **Live Demo** | [supplysentinel.netlify.app](https://supplysentinel.netlify.app) |
| **Target Launch** | MVP: 4 Weeks \| v1.0: 12 Weeks |

---

## Mission Statement

> SupplySentinel exists to eliminate the informational asymmetry that enables black marketing and price gouging of essential commodities in Tier-3 Indian cities. We give citizens a voice, authorities evidence, and communities the power to protect their own markets.

---

## 1. Executive Summary

### 1.1 The Problem

In March 2026, the Strait of Hormuz disruption triggered a domestic LPG crisis in India. In Balangir, Odisha — and across Tier-3 India — official LPG cylinders priced at ₹939 began selling on the black market for ₹2,500 or more. Sugar, mustard oil, and rice followed. Citizens had no way to verify real prices, no easy mechanism to report violations, and no platform to create collective pressure on authorities.

This is not a new problem. Every supply shock — COVID-19, floods, global conflicts — triggers the same cycle: artificial scarcity, panic buying, predatory pricing, helpless citizens, slow government response. The informational gap between official mandates and ground reality is where black marketing lives.

### 1.2 The Solution

SupplySentinel is a hyperlocal, citizen-powered price transparency and market integrity platform built specifically for Tier-3 Indian cities. It bridges the gap between official government price data and real-world market behavior through:

- **Real-Time Citizen Reporting** — Anyone can report overpricing in under 30 seconds, no account required
- **Market Fairness Index** — A single score (0–100) that quantifies how fair local markets are at any moment
- **Automated Authority Reporting** — One-click generation of formal complaint letters to District Collectors and Civil Supplies Officers
- **Supply Health Score & AI Explainer** — Converts complex global supply chain disruptions into plain-language explanations to reduce panic buying
- **Hotspot Mapping** — Visual heat map showing which Balangir areas have the highest concentration of violations

### 1.3 Why Now

The LPG crisis of March 2026 is a live validation event. SupplySentinel is not a solution looking for a problem — the problem is happening this week, in real time, in the homes of Balangir residents. The platform can be launched as an open-source MVP within 4 weeks with zero hosting cost, and scaled to other Odisha districts within 12 weeks.

### 1.4 Open Source Strategy

SupplySentinel is built as an open-source project (MIT License) with a deliberate community-contribution model. Any district in India can fork the repository, replace the Balangir-specific data (areas, MRP prices, official contacts), and deploy their own instance within hours. This creates organic virality and impact at scale without centralized infrastructure costs.

---

## 2. Market Context & Validation

### 2.1 The Crisis Landscape

**Active Crisis — March 2026**

| Commodity | Official Price | Black Market | % Premium |
|-----------|---------------|-------------|-----------|
| LPG Cylinder (14.2kg) | ₹939 | ₹2,500 – ₹4,500 | 166% – 380% |
| Domestic Cylinder | ₹1,100 | ₹2,000 | 82% |
| Mustard Oil (1L) | ₹145 | ₹180 – ₹220 | 24% – 52% |
| Sugar (1kg) | ₹42 | ₹55 – ₹70 | 31% – 67% |

**Legal Framework Available (but Not Accessible to Citizens)**

India has strong laws — the Essential Commodities Act 1955, Consumer Protection Act 2019, and Competition Act. District Collectors and Civil Supplies Officers have raid authority. The gap is not legal power — it is the absence of organized, evidence-backed citizen complaints. SupplySentinel fills this gap by generating the evidence that enables enforcement.

### 2.2 Existing Solutions & Gap Analysis

| Solution | Strengths | Weaknesses | SupplySentinel Advantage |
|----------|-----------|------------|--------------------------|
| GoI PMS App | Official data, 550+ centers, geo-tagged | No citizen reporting, policy dashboard only, no Balangir-level granularity | Hyperlocal + citizen crowdsource + complaint generation |
| NCCF / Consumer Helpline | Official complaint channel exists | Long process, no aggregation, no public visibility, no community pressure | Public feed creates social accountability before formal complaint |
| WhatsApp Groups | Widely used, fast spread | No structured data, no persistence, no authority integration | Structured DB + authority reporting + permanent record |
| Twitter / Social Media | Creates viral pressure | Needs smartphone, English literacy, no offline path, short lifecycle | Works in Odia, works on basic phones via WhatsApp integration |

---

## 3. Users, Personas & Use Cases

### 3.1 User Segments

**Primary Users**

| Persona | Who They Are | Core Need |
|---------|-------------|-----------|
| The Concerned Citizen | Daily wage worker, housewife, small trader in Balangir. Has seen overpricing but had no platform to report it. | Report quickly, see that others have the same problem, feel empowered |
| The Community Leader | Ward member, NGO worker, journalist, teacher. Wants to create systemic accountability. | Compile evidence, generate authority reports, share on WhatsApp groups with credibility |
| The Anxious Household | Family hearing rumors of LPG shortage, tempted to panic-buy. Needs calm, accurate information. | Know the real situation, understand what is causing it, make rational decisions |

**Secondary Users**

| Persona | Who They Are | Value Received |
|---------|-------------|---------------|
| Civil Supplies Officer | Government official responsible for district market regulation | Receives structured, evidence-backed complaint reports instead of unverified calls |
| Open Source Contributor | Developer in another district wanting to deploy for their city | Fork-and-localize in < 2 hours; contribute AI/backend features to core |
| Local Journalist / NGO | Documenting price gouging patterns for reporting or advocacy | Structured data export, trend charts, formal complaint letters as source material |

### 3.2 Key User Stories

1. **As a citizen**, I want to report an overpriced LPG cylinder in under 30 seconds without creating an account, so that my complaint becomes part of a public record.
2. **As a citizen**, I want to see what the official government price should be before I report, so that I know whether I am actually being overcharged.
3. **As a community leader**, I want to see a live feed of all reports in my area with upvotes, so that I can identify which shops are repeatedly flagged.
4. **As a community leader**, I want to generate a formal complaint letter addressed to the District Collector in one click, so that I can email it without needing to know legal language.
5. **As an anxious household**, I want to see a Supply Health Score and a plain-language explanation of the current LPG situation, so that I do not panic-buy unnecessarily.
6. **As a developer in Cuttack**, I want to fork the GitHub repository and replace only the location data and official prices, so that I can deploy SupplySentinel for my district within one day.

---

## 4. Product Scope & Feature Specifications

### 4.1 MVP Scope (Phase 1 — Weeks 1–4)

The MVP must be deployable as a single HTML file with zero backend, zero hosting cost, and zero required user accounts. All data is stored in browser localStorage. The MVP proves the citizen-reporting loop and generates the first official complaint to Balangir authorities.

| ID | Feature | Description | Priority | Phase |
|----|---------|-------------|----------|-------|
| F-01 | Price Report Form | Anonymous commodity price reporting: select commodity (auto-fills official MRP), enter shop name, area, observed price. Shows % deviation instantly. | P0 | MVP |
| F-02 | Official MRP Reference | Hardcoded table of Odisha Civil Supplies official prices for 9+ essential commodities. Community-editable via GitHub PR. | P0 | MVP |
| F-03 | Live Citizen Feed | Chronological feed of all reports with upvoting. Tabs: All / Severe / Shortages. Time-ago display. No login required to upvote. | P0 | MVP |
| F-04 | Market Fairness Index | Algorithmic score (0–100) computed from: % of reports above MRP, average deviation, report volume. Color-coded: Green / Yellow / Red. | P0 | MVP |
| F-05 | Supply Health Score | Separate score for supply availability (0–100) based on shortage-type reports and volume trends. | P0 | MVP |
| F-06 | Hotspot Map | Grid of Balangir areas showing report count and heat level (Low / Med / High). Identifies worst areas at a glance. | P0 | MVP |
| F-07 | DC Complaint Generator | One-click formal complaint letter to District Collector. Compiles all severe/extreme reports into a formatted letter ready to copy-paste or print. | P0 | MVP |
| F-08 | WhatsApp Share Generator | Generates a pre-formatted message summarizing active violations + worst case, ready to paste into community groups. | P0 | MVP |
| F-09 | Crisis Alert Banner | Prominent alert banner that appears during active crisis events. Manually updated for MVP; automated in v2. | P1 | MVP |
| F-10 | localStorage Persistence | All reports stored in browser localStorage. Data persists across sessions on the same device. | P0 | MVP |

### 4.2 v1.0 Scope (Phase 2 — Weeks 5–12)

Phase 2 introduces a shared real-time backend using Google Sheets (free tier) as the database. All citizens see the same live data. The AI explainer is introduced using the Gemini API.

| ID | Feature | Description | Priority | Phase |
|----|---------|-------------|----------|-------|
| F-11 | Google Sheets Backend | Replace localStorage with Google Sheets API as a free shared database. All citizen reports are now visible to everyone in real time. | P0 | v1.0 |
| F-12 | Odia Language Support | Full UI translation to Odia. Language toggle (Odia / English). Odia-language WhatsApp messages and complaint letters. | P0 | v1.0 |
| F-13 | AI Supply Explainer | Gemini API integration: plain-language explanation of why a shortage is happening. Max 3 sentences. Reduces panic. | P1 | v1.0 |
| F-14 | Photo Evidence Upload | Allow citizens to attach photo evidence to reports (uploaded to Google Drive or Cloudinary free tier). Strengthens formal complaints. | P1 | v1.0 |
| F-15 | Email Complaint Direct Send | Send generated complaint letter directly to official email addresses of Balangir DC and Civil Supplies Officer via EmailJS (free tier). | P1 | v1.0 |
| F-16 | District-Level Data Export | Download all reports as CSV for journalists, NGOs, or government officials. One-click export. | P2 | v1.0 |
| F-17 | Trend Charts | 7-day and 30-day price trend charts per commodity. Visualize how prices change over time in response to crises. | P2 | v1.0 |
| F-18 | Multi-District Support | Configuration file that allows any district to deploy their own instance by editing a single JSON config file. | P1 | v1.0 |

### 4.3 v2.0 Scope (Phase 3 — Post Week 12)

Phase 3 introduces a proper backend, PWA capability, and deeper AI integration. This phase is contingent on open-source community contributions or external funding.

| ID | Feature | Description | Priority | Phase |
|----|---------|-------------|----------|-------|
| F-19 | Progressive Web App | Installable PWA with push notifications for crisis alerts, offline capability, and home screen icon. | P1 | v2.0 |
| F-20 | Supabase / Firebase Backend | Proper real-time database replacing Google Sheets. Required for scale beyond ~1000 reports/day. | P1 | v2.0 |
| F-21 | AI Market Fairness Analysis | Gemini Pro analysis of report patterns to identify coordinated price-fixing (cartel detection) and generate AI-authored investigation summaries. | P2 | v2.0 |
| F-22 | Authority Dashboard | Read-only dashboard for verified government officials showing aggregated violations, trend data, and one-click raid list generation. | P2 | v2.0 |
| F-23 | WhatsApp Bot Integration | Citizens can report via WhatsApp message (no app required). Bot parses structured report via Meta Cloud API. | P2 | v2.0 |
| F-24 | Official Data Scraper | Automated scraper for Odisha Civil Supplies website to keep official prices updated without manual edits. | P2 | v2.0 |

---

## 5. Market Fairness Index — Algorithm Specification

The Market Fairness Index (MFI) is SupplySentinel's signature metric. It must be transparent, reproducible, and explainable to a non-technical citizen.

### 5.1 MFI Formula — Phase 1 (MVP)

| Component | Formula | Weight |
|-----------|---------|--------|
| Violation Rate Score | (Reports above MRP / Total Reports) × 100 | 40% |
| Average Deviation Score | Average % deviation across all reported prices vs MRP | 35% |
| Severity Multiplier | Extreme reports count 3×, Severe 2×, Moderate 1× | 15% |
| Report Volume Bonus | Higher report volume = more reliable score. Applies confidence adjustment for < 5 reports. | 10% |

**MFI = 100 − (Weighted Penalty Score)**. Higher score = fairer market. Score < 40 triggers Crisis Alert banner automatically in v1.0.

### 5.2 MFI Interpretation

| Score Range | Status Label | Color | Recommended Action |
|-------------|-------------|-------|-------------------|
| 80 – 100 | Healthy Market | Green | No action needed. Monitor weekly. |
| 60 – 79 | Minor Anomalies | Yellow | Watch. Share public feed in community groups. |
| 40 – 59 | Market Stress | Amber | Generate and send complaint to Civil Supplies Officer. |
| < 40 | CRISIS — Active Gouging | Red + Alert Banner | Escalate to District Collector. Trigger WhatsApp broadcast. |

---

## 6. Technical Architecture

### 6.1 Phase 1 — Zero Infrastructure (MVP)

The MVP has no backend, no database, no server, and no ongoing cost. The entire application is a single HTML file.

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Single-file HTML + CSS + Vanilla JS | No framework dependency. Works in any browser including basic Android browsers. |
| Data Storage | Browser localStorage | Data persists on-device. Not shared between users. Sufficient for solo-validation phase. |
| Official MRP Data | Hardcoded JSON in HTML file | Updated via GitHub PR by community. Version-controlled and auditable. |
| Hosting | Netlify (free) / GitHub Pages (free) | Zero cost. SSL included. |
| Report Sharing | Clipboard API + WhatsApp deep links | One-click copy/share. No API keys required. |
| Fonts & Icons | Google Fonts (Syne, IBM Plex Sans) | Free CDN. Fallback to system fonts if offline. |

### 6.2 Phase 2 — Shared Backend (v1.0)

| Layer | Technology | Cost |
|-------|-----------|------|
| Database | Google Sheets + Apps Script API | Free up to ~50k reads/day, 100k rows. |
| AI Explainer | Google Gemini API (gemini-1.5-flash) | Free tier: 15 RPM, 1M tokens/day. |
| Email Dispatch | EmailJS (free tier) | 200 emails/month free. |
| Image Storage | Cloudinary free tier | 25GB free storage. |
| **Total Monthly Cost** | **₹0 at MVP scale** | All services are free tier. No credit card required. |

### 6.3 File Structure (GitHub Repository)

| File / Directory | Purpose |
|-----------------|---------|
| `index.html` | Main application — the complete single-file MVP |
| `config/balangir.json` | District-specific config: area names, official prices, authority contacts |
| `config/cuttack.json` (example) | Sample config showing how another district forks the project |
| `data/official-prices.json` | Official MRP data — community-editable via PR. Versioned with date stamps. |
| `docs/CONTRIBUTING.md` | How to add a new district, update prices, translate to regional languages |
| `docs/DEPLOY.md` | Step-by-step deployment guide |
| `docs/PRD.md` | This document — Product Requirements Document |
| `LICENSE` | MIT License — free to use, modify, and deploy for any district |

---

## 7. Open Source Community Strategy

### 7.1 Why Open Source?

SupplySentinel's mission is social impact at scale, not profit. A proprietary model requires ongoing funding to serve each new district. An open-source model creates a self-sustaining ecosystem where each new city deploys, contributes improvements, and expands the collective impact.

**The Fork-and-Deploy Model**: Every district in India has the same problem. SupplySentinel is designed so that a developer in Cuttack, Sambalpur, or Bhubaneswar can fork the repo, edit one configuration file, and have a live district instance in under 2 hours. Their contributions flow back to the core repository.

### 7.2 Contribution Roadmap

| Contribution Type | Who Can Contribute | How to Contribute |
|-------------------|-------------------|-------------------|
| New District Config | Anyone who knows their city — no coding required | Copy `config/balangir.json` → edit area names, prices, authority emails → submit PR |
| Price Data Update | Citizens, shopkeepers, journalists | Edit `data/official-prices.json` → submit PR with source citation |
| Language Translation | Odia / Hindi / Telugu speakers | Add locale strings file in `/locales` directory |
| AI / Backend Features | Developers with Gemini / Supabase experience | Open issues on GitHub for Phase 2 and 3 features |
| WhatsApp Bot | Developer with Meta Cloud API experience | Separate microservice in `/services/whatsapp-bot` |

---

## 8. Launch Roadmap & Milestones

### 8.1 Timeline Overview

| Timeline | Phase | Key Deliverables | Success Metric |
|----------|-------|-----------------|---------------|
| Week 1–2 | MVP Build + Launch | Final HTML file, GitHub repo live, live URL active, first WhatsApp broadcast in Balangir | 10+ citizen reports submitted organically |
| Week 3–4 | First Authority Report | Generate and send first formal complaint to Balangir DC office. Document response. | Complaint sent. DC response documented. |
| Week 5–8 | Google Sheets Backend | Shared real-time database. All users see same data. | 50+ reports in shared DB. 3+ GitHub stars. |
| Week 9–12 | Odia + AI Explainer | Odia language support. Gemini AI explainer. First non-Balangir district fork. | First district fork live. Gemini explainer active. |
| Month 4+ | Scale + v2.0 | PWA, proper backend, authority dashboard, WhatsApp bot. | 5+ districts. 500+ total reports. Media coverage. |

---

## 9. Risks, Assumptions & Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| Citizens don't report — platform stays empty | Medium | Seed the platform manually with verified reports. Show non-empty state from Day 1. Reduce friction to 30-second reporting. |
| False / malicious reports targeting innocent shops | Medium | Community upvote/downvote system. Reports below threshold auto-hidden. Manual moderation flag for formal complaints. |
| Authorities ignore the complaint letters | High in short term | Public pressure is the primary lever. Media tagging + WhatsApp sharing creates parallel accountability. Document non-responses publicly. |
| Legal threat from flagged shop owners | Low but non-zero | Reports are citizen testimonials, not editorial claims. Add disclaimer. Require upvote threshold before highlighting. |
| localStorage not shared — every user sees different data | Certain in MVP | Primary motivator to migrate to Google Sheets in Week 5. Seed data provides consistent experience. |
| Crisis ends before launch, losing urgency | Low | Platform value extends beyond any single crisis. Position as permanent community infrastructure. |

---

## 10. Success Metrics

### 10.1 MVP Success Criteria (4 Weeks)

| Metric | Minimum Success | Strong Success |
|--------|----------------|---------------|
| Total citizen reports submitted | 10 reports | 50+ reports |
| Unique Balangir areas represented | 3 areas | 7+ areas |
| Formal complaint letters generated | 1 complaint sent | 3+ complaints, 1 official response |
| GitHub repository stars | 5 stars | 25+ stars |
| WhatsApp shares of platform URL | Shared in 5+ groups | Shared in 20+ groups |

### 10.2 Impact Metrics (12 Weeks)

- At least one shop modifies its pricing behavior after being publicly listed (documented)
- At least one government official acknowledges the platform's reports
- Platform is forked and deployed for at least one other Odisha district
- Local media (Sambad, Dharitri, or OTV) references SupplySentinel data in a news story
- Total reports across all districts exceeds 200 within 12 weeks

---

## 11. Legal & Ethical Considerations

### 11.1 Defamation Risk & Disclaimer

All citizen reports must be clearly labeled as unverified citizen testimonials, not confirmed violations. The platform UI must display a disclaimer: *"Reports are citizen submissions and have not been independently verified. This platform does not make legal claims against any individual or business."*

### 11.2 Privacy

The MVP collects zero personal data. No accounts, no emails, no phone numbers. In Phase 2 (Google Sheets backend), only anonymized report metadata is stored — commodity, area, price, timestamp. No identifying information is stored or displayed.

### 11.3 Legal Basis for Complaint Generation

Formal complaint letters generated by the platform cite the Essential Commodities Act 1955 and Consumer Protection Act 2019 — both of which explicitly empower citizens and authorities to report and investigate price gouging. The platform acts as a structured complaint aggregator, not a legal authority.

### 11.4 Data Accuracy

Official MRP prices in the platform are sourced from publicly available government data (Odisha Civil Supplies, Department of Consumer Affairs). The community-editable model requires citations for any price update. Version control via GitHub ensures a full audit trail of all price data changes.

---

## 12. Appendix

### 12.1 Official MRP Reference (Odisha, March 2026)

| Commodity | Official Price (₹) | Unit | Source |
|-----------|-------------------|------|--------|
| LPG Cylinder (14.2kg) | 939 | Per cylinder | IOCL / MoP&NG |
| Mustard Oil (1L) | 145 | Per liter | Odisha Civil Supplies |
| Sugar (1kg) | 42 | Per kg | DFPD |
| Rice (1kg) | 38 | Per kg | FCI / PDS |
| Wheat Atta (1kg) | 35 | Per kg | DFPD |
| Toor Dal (1kg) | 155 | Per kg | NAFED / NCCF |
| Onion (1kg) | 40 | Per kg | Mandi / NCCF |
| Tomato (1kg) | 35 | Per kg | Mandi |
| Petrol (1L) | 105 | Per liter | IOCL Odisha |

*All prices are approximate as of March 2026. Always verify against official government sources.*

### 12.2 Authority Contact Reference (Balangir)

| Authority | Role | How to Reach |
|-----------|------|-------------|
| District Collector, Balangir | District administration, ECA enforcement | balangir-collector@nic.in (verify before use) |
| Civil Supplies Officer, Balangir | Essential commodities regulation, PDS oversight | Odisha Food Supplies Dept. district office |
| Consumer Helpline (National) | Central grievance registration | 1800-11-4000 (toll free) \| consumerhelpline.gov.in |

### 12.3 Document Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| v1.0 | March 2026 | Initial PRD — complete scope definition, architecture, roadmap, metrics | Aswini Behera |
| v1.1 (planned) | After MVP launch | Revise based on real user feedback from Balangir launch | Aswini Behera |

---

<p align="center">
  <strong>Built with purpose. Open to all. For Balangir and beyond.</strong><br>
  <em>SupplySentinel is open source. Star, fork, contribute, and deploy.</em>
</p>
