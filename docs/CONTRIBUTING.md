# Contributing to SupplySentinel

Thank you for your interest in fighting black marketing with open-source technology!

## How to Contribute

### 1. Fork for Your District
The easiest way to contribute is to deploy SupplySentinel for your own district:
1. Fork this repository
2. Edit `config/balangir.json` with your district's data
3. Rename the file to `config/your-district.json`
4. Update `index.html` to load your config
5. Deploy on GitHub Pages

See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

### 2. Report Bugs
- Open an issue on GitHub
- Include browser, device, and steps to reproduce
- Screenshots are very helpful

### 3. Submit Code
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes (vanilla HTML/CSS/JS only — no frameworks)
4. Test on mobile (360px width, Chrome Android)
5. Submit a Pull Request with a clear description

### Code Guidelines
- **No build tools** — everything must work as static files on GitHub Pages
- **No paid services** — every integration must have a usable free tier
- **Mobile-first** — most users are on low-end Android phones
- **Keep it simple** — a daily wage worker in rural India should be able to use this
- **Vanilla only** — HTML, CSS, JS. No React, no npm, no bundlers

### 4. Add Translations
We need translations for Indian regional languages:
- Hindi, Odia, Telugu, Tamil, Bengali, Marathi, and more
- See the translations object in `index.html` for the string keys

### 5. Verify Price Data
- Help us keep official MRP data current
- Sources: [PPAC](https://ppac.gov.in), [Consumer Affairs](https://consumeraffairs.nic.in/price-monitoring-cell)
- Submit updates via Pull Request to `data/official-prices.json`

## Code of Conduct
- Be respectful and constructive
- This project serves vulnerable communities — keep that in mind
- No spam, no self-promotion, no hate speech

## Questions?
Open an issue or email: aswinibehera666@gmail.com
