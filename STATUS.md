# STATUS

## Current version

v1.0.0 — initial static implementation.

## Project health

Green. Site is complete, renders correctly, and all referenced assets are
present.

## Completed features

- Hero, Our Story, Services (10 items), Brands (8 logos), Careers (5 roles),
  Contact sections implemented as static HTML.
- Scroll-aware sticky nav (vanilla JS).
- Responsive layout down to ~400px width.
- All imagery sourced from the client's Claude Design project and the
  workshop's own photos/logos, optimized for web (JPEG compression,
  resized where oversized).

## Features in progress

None currently.

## Known issues

- No favicon set yet (browser tab uses default icon).
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
- Decide on and configure a deployment target (see README "Deployment
  instructions").
