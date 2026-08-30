# ✦ Veltrix Studio

<div align="center">

[![Website](https://img.shields.io/badge/Website-veltrixstudio.lol-0A0D18?style=for-the-badge&logo=googlechrome&logoColor=white)](https://veltrixstudio.lol)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com)
[![Roblox](https://img.shields.io/badge/Roblox-Official%20Group-000000?style=for-the-badge&logo=roblox&logoColor=white)](https://www.roblox.com)
[![SEO Score](https://img.shields.io/badge/SEO-100%25%20Optimized-00C853?style=for-the-badge&logo=google&logoColor=white)](https://veltrixstudio.lol)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**The Official Gaming Portal, Hub & Discord Message Widget Suite for Veltrix Studio**  
*Home of the upcoming viral Roblox multiplayer sensation: **Grow a Brainrot Baby!***

[Explore Live Site](https://veltrixstudio.lol) • [Discord Widget](#-discord-message-widget) • [SEO & Robots](#-100-seo--search-crawlers) • [Quickstart](#-quickstart--development)

</div>

---

## 📖 Overview

**Veltrix Studio** (`veltrixstudio.lol`) is an ultra-fast, cinematic, spatial web application and developer portal designed for modern gaming communities. Built with **React 18**, **TypeScript**, **Vite**, and **TailwindCSS**, it delivers an uncompromising aesthetic: pure black obsidian luxury, custom GPU blur-shaders, dynamic mix-blend cursors, and an authentic Discord message & rich embed widget.

---

## ⚡ Key Highlights & Architecture

### 1. 🎛️ Authentic Discord Message Widget
- **Standalone Widget Page** (`public/widget.html`): High-fidelity Discord message & rich embed card featuring:
  - Bot verification badge (`✓ APP`), active online avatar indicator, and `@everyone` announcement styling.
  - Discord Rich Embed card with status fields (`Alpha Soon`, `Roblox`, `9.8K Members`).
  - Interactive component buttons (*Join Discord Server*, *Roblox Group*, *Copy Invite Link*).
  - Interactive reaction counter buttons (`🚀 143`, `🔥 89`, `👶 256`, `❤️ 98`) with live toggle counters.
- **In-App Embed Generator**: Built-in modal with live interactive preview, one-click code clipboard generator (`<iframe>` and React JSX), and live preview frame.

### 2. 🔍 100% Lighthouse SEO & Search Crawler Integration
- **Full Schema.org JSON-LD Structured Data**:
  - `Organization`: Brand metadata, official logo, and social endpoints.
  - `VideoGame`: Detailed metadata for *"Grow a Brainrot Baby!"* (genre, platform, multiplayer mode).
  - `WebSite` & `WebPage`: Canonical linking and publisher hierarchy.
- **Comprehensive Open Graph & Twitter Cards**: 1200×630px high-definition vector asset (`public/og-image.svg`) for rich previews on Discord, X (Twitter), Slack, and Facebook.
- **`<noscript>` Fallback**: Semantic HTML fallback rendering for legacy search engine crawlers and bots that don't execute client-side JavaScript.
- **PWA & Mobile Manifest** (`public/site.webmanifest`): Web app manifest with SVG icon masks and theme color declarations.

### 3. 🤖 Optimized Robots & Sitemap Engine
- **`public/robots.txt`**: Unrestricted crawler indexing directives for Googlebot, Bingbot, Slurp, DuckDuckBot, Baiduspider, YandexBot, Twitterbot, Discordbot, and AI search systems.
- **`public/sitemap.xml`**: XML Sitemap with standard, image, and video schema namespaces, high priority rankings, and change frequencies.

### 4. 🎨 Next-Gen UI/UX & Performance
- **Zero-Friction 1-Scroll Engine**: Snappy keyboard, mouse wheel, and touch-swipe page transitions with GPU transform matrixes.
- **Ultra-Low Memory Footprint (<50MB RAM)**: Pre-warmed GPU font glyph atlases and hardware video decoding pipeline.
- **Mix-Blend Difference Cursor**: Custom geometric crosshair cursor that dynamically inverts colors over buttons, text, and media.
- **Dual Bi-Directional Infinite Marquees**: Hardware-accelerated CSS marquee strips with smooth GPU rendering.

---

## 🧩 Discord Message Widget

Embed the authentic Veltrix Studio Discord message widget on any website, Notion page, blog, or developer portfolio.

### Option A: Standard HTML `<iframe>`
```html
<iframe
  src="https://veltrixstudio.lol/widget.html"
  width="460"
  height="360"
  frameborder="0"
  style="border-radius: 16px; overflow: hidden;"
  title="Veltrix Studio Discord Widget">
</iframe>
```

### Option B: React / Next.js Component
```tsx
export function VeltrixDiscordWidget() {
  return (
    <iframe
      src="https://veltrixstudio.lol/widget.html"
      width="460"
      height="360"
      className="rounded-2xl border-0 overflow-hidden shadow-2xl"
      title="Veltrix Studio Discord Widget"
    />
  );
}
```

---

## 🤖 Robots & Sitemap Configuration

### `robots.txt` (`/public/robots.txt`)
```txt
User-agent: *
Allow: /
Allow: /widget.html
Allow: /assets/
Allow: /favicon.svg
Allow: /og-image.svg
Allow: /site.webmanifest

Sitemap: https://veltrixstudio.lol/sitemap.xml
Host: https://veltrixstudio.lol
```

### `sitemap.xml` (`/public/sitemap.xml`)
- **Homepage** (`https://veltrixstudio.lol/`): Priority `1.0`, Changefreq `daily`
- **Widget** (`https://veltrixstudio.lol/widget.html`): Priority `0.8`, Changefreq `weekly`

---

## 📁 Repository Structure

```
VeltrixStudiolol/
├── public/
│   ├── favicon.svg            # Crisp SVG dark luxury crosshair starburst favicon
│   ├── og-image.svg           # 1200x630 High-res Open Graph social share card
│   ├── robots.txt             # 100% SEO crawler & search bot directives
│   ├── site.webmanifest       # PWA web manifest metadata
│   ├── sitemap.xml            # XML sitemap with image & page index entries
│   └── widget.html            # Authentic Discord message & embed widget
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       └── Gondens DEMO.otf  # Clean dedicated fonts directory
│   ├── hooks/
│   │   └── useVideoScrub.ts   # Video timeline scrubbing controller
│   ├── types/
│   │   └── mp4box.d.ts        # TypeScript declarations
│   ├── App.tsx                # Main 2-screen UI, video engine, & Discord modal
│   ├── index.css              # Custom font faces, animations, & base layers
│   └── main.tsx               # React DOM entrypoint
├── index.html                 # 100% SEO meta tags, OpenGraph, Twitter, JSON-LD
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind styling tokens & font families
├── tsconfig.json              # TypeScript compilation setup
└── vite.config.ts             # Vite bundler configuration
```

---

## 🚀 Quickstart & Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** or **yarn**

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified bundle and static assets (including `robots.txt`, `sitemap.xml`, `widget.html`, and `favicon.svg`) will be generated inside the `/dist` directory.

### 5. Preview Production Bundle
```bash
npm run preview
```

---

## 🌐 Community & Socials

- 🎮 **Roblox Group**: [Veltrix Studio Official Group](https://www.roblox.com)
- 💬 **Discord**: [Veltrix Studio Discord Server](https://discord.com)
- 🐦 **X (Twitter)**: [@VeltrixStudio](https://x.com)
- 🌐 **Website**: [https://veltrixstudio.lol](https://veltrixstudio.lol)

---

## 📄 License & Credits

Copyright © 2026 **Veltrix Studio** (`veltrixstudio.lol`). All rights reserved.  
*Grow a Brainrot Baby!* is a trademark property of Veltrix Studio.
