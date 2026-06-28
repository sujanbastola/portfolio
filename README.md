# Sujan Bastola — Personal Portfolio

> 🌐 **Live:** [sujanbastola.github.io/sujan-portfolio](https://sujanbastola.github.io/sujan-portfolio)

A modern, Apple-inspired personal portfolio built from scratch with React & TypeScript. Features smooth animations, dark/light mode, full EN/日本語 language support, and a fully responsive layout.

---

## ✨ Features

| Feature | Details |
|---|---|
| ⚡ Animated hero | Particle canvas background, gradient name, live status badge |
| 🌙 Dark / Light mode | Seamless toggle with CSS variables |
| 🇯🇵 EN / 日本語 | Full bilingual support across all sections |
| 🎬 Loading screen | Plays once per session using sessionStorage |
| 📊 Scroll progress bar | Gradient bar tracks reading position |
| 🔝 Back to top | Floating gradient button appears after scroll |
| 🛠️ Skills section | Animated bars with count-up numbers & category filter |
| 🗂️ Projects | Featured cards with live links, NDA toggle for company work |
| 📝 Blog | Full article modal for 3 project deep-dives |
| 📬 Contact | One-click email copy, LinkedIn, GitHub, timezone |
| 📱 Mobile responsive | Fluid `clamp()` layout, hamburger menu, single-column grids |
| 🔍 SEO & OG | Meta tags, Open Graph image, Twitter card |
| 📦 PWA ready | Custom manifest, branded favicon |
| 🚫 Custom 404 | Branded error page instead of GitHub default |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Full-screen hero with particle canvas
│   ├── Navbar.tsx         # Glassmorphism nav, lang/theme toggles
│   ├── Skills.tsx         # Animated skill bars with category filter
│   ├── Experience.tsx     # Timeline — work & education
│   ├── Projects.tsx       # Featured project cards + NDA toggle
│   ├── Blog.tsx           # Blog cards with full article modal
│   ├── Contact.tsx        # Contact cards with copy & social links
│   ├── Footer.tsx         # Minimal footer
│   ├── LoadingScreen.tsx  # One-time animated intro
│   ├── ScrollProgress.tsx # Top progress bar
│   └── BackToTop.tsx      # Floating scroll-to-top button
├── context/
│   ├── ThemeContext.tsx    # Dark / light mode
│   └── LangContext.tsx    # EN / JP language toggle
└── i18n/
    └── translations.ts    # All EN & JP strings
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/sujanbastola/sujan-portfolio.git
cd sujan-portfolio

# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Animations | Framer Motion |
| Icons | Lucide React |
| Scroll detection | react-intersection-observer |
| Styling | CSS Variables (no CSS framework) |
| Deployment | GitHub Pages via `gh-pages` |

---

## 🌍 Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

Deploys to the `gh-pages` branch automatically. Live at:
**[https://sujanbastola.github.io/sujan-portfolio](https://sujanbastola.github.io/sujan-portfolio)**

---

## 👤 About Me

**Sujan Bastola** — Full Stack Developer based in Osaka, Japan.
5 years of experience at [Espec Corp](https://www.espec.co.jp/english/corporate/research.html) building Ruby APIs, React dashboards, Linux systems, and AI agent workflows.

- 🐙 GitHub: [github.com/sujanbastola](https://github.com/sujanbastola)
- 💼 LinkedIn: [linkedin.com/in/sujan-bastola-7199b2259](https://jp.linkedin.com/in/sujan-bastola-7199b2259)
- 📧 Email: bastolasujan202@gmail.com

---

*Built by myself — because the best way to learn is to build.* 🛠️
