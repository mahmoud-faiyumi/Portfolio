## Modern Developer Portfolio

A fast, responsive, and accessible personal portfolio with a modern coding/terminal-inspired design. Built with semantic HTML, modern CSS (custom properties, glassmorphism, animations), and a sprinkle of vanilla JavaScript for tasteful interactions.

## Features

- **Modern coding theme**: Terminal-inspired typography, neon accents, and clean visual hierarchy.
- **Glassmorphism UI**: Subtle blur, depth, and glow across cards, buttons, and sections.
- **Responsive by design**: Scales beautifully from mobile to ultra-wide screens.
- **Accessible interactions**: Focus states, reduced-motion support, semantic structure.
- **Hero animations**: Matrix-style particles and terminal-style headings.
- **Mobile navigation drawer**: Full-height drawer at ≤1050px with outside‑click to close and body scroll lock.
- **On-top loading screen**: Terminal-style loading overlay with extended duration.
- **Articles, tags, categories**: Rich article cards with Font Awesome icons and meta (size, read time).
- **Education & Experience cards**: Badges, meta info, highlights/bullets, and skill chips.
- **Certifications**: Clean grid with interactive badges (incl. Angular Front-End Development – 2025).
- **Footer & Contact**: Coding-themed copy, command-style buttons, and quick actions.

## Tech Stack

- **Core**: HTML5, CSS3 (flexbox, grid, custom properties), JavaScript (ES6+)
- **Fonts**: Google Fonts — `JetBrains Mono`, `Inter`
- **Icons**: Font Awesome 6 Free (locally hosted)

## Getting Started

This is a static site. No build step is required.

### Prerequisites
- Any modern browser
- Optional: a simple static server for local development

### Run locally
- Option 1: Open `index.html` directly in your browser
- Option 2: Serve the folder with a local server

```bash
# Python 3
python -m http.server 5173

# Node (no install):
npx http-server -p 5173

# Then open:
http://localhost:5173
```

## Project Structure

```text
Portfolio/
  ├─ articles/              # PDF articles shown in the Articles section
  ├─ assets/                # Images and favicon
  ├─ style/
  │  ├─ all.min.css        # Font Awesome (locally hosted)
  │  ├─ style.css          # Main stylesheet (modern coding theme)
  │  └─ header.css         # Legacy header styles (not linked by default)
  ├─ webfonts/             # Font Awesome webfonts
  ├─ index.html            # Page markup and content
  ├─ script.js             # Interactions and micro-animations
  └─ README.md             # You are here
```

## Customize

### Brand, colors, and typography
- Edit CSS custom properties in `style/style.css` under `:root` for colors, shadows, radii, and timings.
- Fonts are defined at the top of `style/style.css` and in the `<head>` of `index.html`.

### Header and navigation
- Header uses `position: sticky` and `--header-height` to ensure the mobile drawer slides under the header.
- The mobile drawer (≤1050px) toggles via the menu button and applies `body.menu-open` to lock scroll.

### Sections and content
- Update copy and items directly in `index.html`:
  - `Hero`: headline, subtitle, and action buttons
  - `Projects`: update project cards, tech lists, and links
  - `Skills` and `Articles`: titles, icons, tags, categories, and meta
  - `Certifications`: add/remove cards (e.g., Angular 2025)
  - `Education` and `Experience`: card titles, meta, bullet points, and chips
  - `Volunteer`, `Contact`, and `Footer`: copy, links, and quick actions

### Interactions and animations
- See `script.js` for:
  - Header scroll state (`.header.scrolled`)
  - Hero background particles
  - Loading screen timing and messages
  - Mobile drawer open/close + outside‑click to dismiss
  - Section reveal via `IntersectionObserver` toggling `.section.visible`

## Accessibility & UX

- Respects `prefers-reduced-motion` where applicable.
- Focus states are visible for interactive controls.
- Color contrast targets a dark-first palette with neon accents.

## Deployment

Any static hosting provider works:

- **GitHub Pages**
  1. Push to `main`
  2. In repo Settings → Pages, select source `main` → `/ (root)`
  3. Save and wait for the deploy URL

- **Netlify**
  - Drag-and-drop the folder or connect the repo (no build command needed)

- **Vercel**
  - Import the repo, set framework to “Other” (no build), and deploy

## Notes on Assets & Licenses

- **Font Awesome 6 Free**: Included locally via `style/all.min.css` and `webfonts/` (see Font Awesome license terms)
- **Google Fonts**: `JetBrains Mono` and `Inter` served under their respective licenses
- **Images/PDFs** in `assets/` and `articles/` belong to the portfolio owner

If you plan to reuse this project, please keep attribution and verify third‑party licenses.

## Roadmap (Optional)

- Add automated image optimization for assets
- Integrate a simple blog generator (Markdown → HTML)
- Expand article meta with real read-time and file-size calculation

## Contact

For opportunities or questions, see the Contact section on the site or update links in `index.html` to your preferred profiles.