## Modern Developer Portfolio

A fast, responsive, and accessible personal portfolio with a modern coding/terminal-inspired design. Built with semantic HTML, modern CSS (custom properties, glassmorphism, animations), and vanilla JavaScript. Content is separated into `content.js` for easy updates.

## Features

- **Content-driven layout**: Edit `content.js` to update About, Experience, Projects, Skills, Articles, and more
- **Modern coding theme**: Terminal-inspired typography, neon accents, and clean visual hierarchy
- **Self-hosted fonts**: Inter + JetBrains Mono served locally (no Google Fonts runtime dependency)
- **Optimized media**: WebP assets, lazy-loaded images, compact favicon, social preview image
- **Glassmorphism UI**: Subtle blur, depth, and glow across cards, buttons, and sections
- **Responsive by design**: Scales from mobile to ultra-wide screens
- **Accessible interactions**: Focus states, skip link, reduced-motion support, semantic structure
- **Scroll spy navigation** + sticky header + back-to-top
- **Project case studies**: Problem / Role / Result details with explicit “View details” controls
- **Short CV link**: `/cv/` redirects to the latest PDF resume
- **SEO basics**: meta tags, Open Graph, JSON-LD Person schema, `sitemap.xml`, `robots.txt`

## Tech Stack

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Self-hosted `JetBrains Mono`, `Inter` (`fonts/`)
- **Icons**: Font Awesome 6 Free (locally hosted)

## Getting Started

This is a static site. No build step is required.

```bash
# Python 3
python -m http.server 5173

# Then open:
http://localhost:5173
```

## Project Structure

```text
Portfolio/
  ├─ articles/              # PDF articles + CV
  ├─ assets/                # WebP images, favicon, OG preview
  ├─ cv/                    # Short /cv/ redirect to resume PDF
  ├─ fonts/                 # Self-hosted Inter + JetBrains Mono
  ├─ style/
  │  ├─ all.min.css         # Font Awesome
  │  └─ style.css           # Main stylesheet
  ├─ content.js             # Portfolio content (edit here)
  ├─ index.html             # Page shell / layout
  ├─ script.js              # Renderers + interactions
  ├─ robots.txt
  ├─ sitemap.xml
  └─ README.md
```

## Customize

1. Update copy, roles, projects, and articles in `content.js`
2. Adjust colors/spacing in `style/style.css` (`:root` custom properties)
3. Replace `assets/preview.webp` for social sharing
4. Drop a new CV into `articles/` (keep filename or update `cv/index.html`)

## Deployment

GitHub Pages (this repo), Netlify, or Vercel — no build command needed.

## Contact

See the Contact section on the site or update links in `content.js`.
