# STATUS

## Current version

v1.1.1 — live on Vercel.

## Project health

Green. Site is complete, renders correctly (verified live in-browser), and
every referenced asset resolves and decodes correctly. **Deployed:**
https://mbs-website-ten.vercel.app/ (connected to `main`, auto-deploys on
push).

## Completed features

- Hero, Our Story, Services (10 items), Brands (8 logos), Careers (5 roles),
  Contact sections implemented as static HTML.
- Scroll-aware sticky nav (vanilla JS).
- Scroll progress bar (fixed, bottom of viewport) with a live percentage
  readout.
- Responsive layout down to ~400px width.
- All imagery sourced from the client's Claude Design project and the
  workshop's own photos/logos, optimized for web (JPEG compression,
  resized where oversized).
- Favicon (SVG + PNG fallbacks + apple-touch-icon), Open Graph / Twitter
  card metadata with a generated 1200x630 social image, `robots.txt`, and
  `sitemap.xml`.

## Features in progress

None currently.

## Known issues

- The nav/hero brand mark is currently the Mercedes-Benz badge
  (`assets/mercedes.png`) standing in for the real MBS mark — the original
  `assets/mark.png` was corrupted on import and unrecoverable; see
  HANDOFF.md for detail.
- Logo images vary in source quality/crop since they were supplied as
  individual "background removed" PNGs rather than a single designed
  sprite; visually consistent but not pixel-uniform.

## Technical debt

- Services and role listings are hardcoded in `index.html` rather than
  data-driven. Acceptable for a static single-page site of this size; would
  need revisiting if content starts changing frequently.

## Blockers

None.

## Upcoming milestones

- Client review of copy and imagery.
- Optional: connect a custom domain in Vercel if the client wants one
  instead of the `vercel.app` subdomain.
