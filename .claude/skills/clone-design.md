---
name: clone-design
description: >
  Pixel-perfect design replication from a reference image, screenshot, or URL.
  Use when the user provides a photo, screenshot, or URL of a website they want to replicate.
  Triggers on: "odwzoruj", "sklonuj", "skopiuj design", "zrób jak na zdjęciu", "replicate this",
  "clone this design", "make it look like", "pixel perfect", "copy this layout".
---

# Design Clone Workflow (Pixel-Perfect Replication)

You are replicating a reference design with maximum fidelity. Every pixel matters.

## Principles
- **Zero deviation during clone phase** — match spacing, colors, typography, layout exactly
- **Real content** — use actual text/assets, not lorem ipsum  
- **Section-by-section** — tackle header, hero, each section, and footer separately
- **Screenshot → compare → fix loop** — iterate until visual match is achieved

## Workflow

### Step 1 — Analyze reference
If user provides an image: read and analyze it thoroughly.
- Extract exact color values (hex/rgb)
- Note typography: font families, sizes, weights, line-heights
- Map spacing and layout grid
- Identify all components: nav, hero, cards, buttons, forms, footer

### Step 2 — Extract design tokens
Create `.claude/design-tokens.md` with:
```
Colors:
  primary: #______
  secondary: #______
  background: #______
  text: #______
  accent: #______

Typography:
  heading-font: ______
  body-font: ______
  heading-sizes: ______
  body-size: ______

Spacing:
  section-gap: ______
  container-max-width: ______
```

### Step 3 — Build section by section
For each section (nav → hero → about → services → gallery → contact → footer):
1. Write the Astro component
2. Run dev server if not running: `npm run dev`
3. Take screenshot with `full-page-screenshot` skill or system screenshot
4. Compare visually with reference
5. Fix discrepancies
6. Repeat until match

### Step 4 — Polish pass
- Check all breakpoints (mobile 375px, tablet 768px, desktop 1440px)
- Verify hover states, transitions, animations
- Check font loading (add Google Fonts or local fonts as needed)

## Tech stack in this project
- **Astro** — components in `src/components/`, pages in `src/pages/`
- **Tailwind CSS v4** — utility classes, no inline styles
- **Layout** — `src/layouts/Layout.astro` wraps all pages

## Component creation pattern
```astro
---
// src/components/Hero.astro
---
<section class="...tailwind classes...">
  ...
</section>
```

Then import in `src/pages/index.astro`:
```astro
---
import Hero from '../components/Hero.astro';
---
<Layout>
  <Hero />
</Layout>
```
