# Nexcent Landing Page

A pixel-close recreation of the ["Minimal Landing Page Design"](https://www.figma.com/proto/NX5vl6kszVZ0OFVLAKJtSn/) Figma
prototype, built as a server-rendered, content-driven Next.js application.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React (server components by default)
- **Styling:** Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## Architecture

The page is split into three layers so content, presentation, and logic
never mix:

```
data/content/*.json    → raw copy for each section (edit this to change text)
types/content.ts        → TypeScript contracts every JSON file must satisfy
data/site-content.ts     → aggregates + types the JSON into one object

components/ui/           → generic, content-agnostic primitives
                            (Button, Container, Icon)
components/layout/       → Header, Footer, MobileNav
components/sections/     → one component per landing-page section
                            (Hero, ClientLogos, Community, About, Stats,
                            Feature, Testimonial, Blog, Cta)

app/page.tsx              → composes the sections, passing each its slice
                            of siteContent as props
app/layout.tsx             → root layout, fonts, metadata
```

**No component hardcodes copy.** Every heading, paragraph, button label,
image, and link is read from `data/content/*.json` via `siteContent` and
passed down as typed props. To change what the page says, edit the JSON —
never the components.

Every component is a React Server Component by default; the only
`"use client"` boundary is `MobileNav.tsx`, which needs local state for the
mobile menu toggle. This keeps the page fully SSR while isolating the one
interactive island to its own small file.

## Responsive design

All sections use Tailwind's mobile-first breakpoints (base → `sm` → `lg`),
with the two-column sections (`About`, `Feature`, `Stats`, `Testimonial`,
`Hero`) collapsing to a single stacked column below `lg`, and the card grids
(`Community`, `Blog`) collapsing from 3 → 1 columns.

## Assets

Illustrations, client logos, and blog thumbnails are original SVGs in
`public/images/`, drawn to match the composition, color palette, and layout
of the Figma illustrations without reproducing any of Figma's proprietary
asset files.
