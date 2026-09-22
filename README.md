# MBS Service Centre Website

## Overview

Marketing website for MBS Service Centre, a car workshop in Section 51A,
Petaling Jaya, Malaysia, run by Mr. Tai since 1999. The site presents the
workshop's story, services, brand specialisations, open roles, and contact
details on a single page.

## Purpose and goals

- Give prospective customers a fast, credible overview of the workshop and
  its services.
- Provide clear contact paths (WhatsApp, phone, email, map/Waze) that work
  on mobile.
- Support hiring by listing open roles.
- Support brand-partnership outreach.

## Features

- Single-page layout: Hero, Our Story, Services, Brands, Careers, Contact.
- Sticky nav bar that reveals a compact brand mark + link pill on scroll.
- Embedded Google Map with a Waze deep link.
- Fully static — no build step, no backend, no JS framework.

## Technology stack

- Plain HTML5, CSS3, vanilla JavaScript.
- Google Fonts: Playfair Display, Arimo, JetBrains Mono.
- No frameworks, no bundler, no dependencies.

## Installation

None required. Clone or copy the folder — there is nothing to `npm install`.

## Environment setup

No environment variables or secrets are used.

## Configuration requirements

None.

## Running the application

Serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser. Opening `index.html` directly
via `file://` also works for a quick look, though the map iframe and fonts
require network access either way.

## Testing instructions

There is no application logic to unit test. Validate changes by:

- Running `tidy -q -e -utf8 index.html` and confirming no markup errors.
- Running `node -c script.js` to check JS syntax.
- Loading the page in a browser at desktop and mobile widths and checking
  each section, the nav scroll behavior, and all links (WhatsApp, tel,
  mailto, Google Maps, Waze).

## Deployment instructions

This is a static site: point any static host (Vercel, Netlify, GitHub
Pages, S3 + CloudFront, or the client's existing web host) at this repo
root — no build command, no output directory, no environment variables.
Vercel/Netlify will auto-detect it as a plain static site.

**After the first deploy, update these two placeholders to match the real
domain** (they currently assume `https://mbs-website.vercel.app`, a guess
made before deployment):
- `robots.txt` — the `Sitemap:` line
- `sitemap.xml` — the `<loc>` value
- `index.html` — `og:image` and `twitter:image` (must be absolute URLs for
  link-preview crawlers to fetch them)

## Known limitations

- Copy and structure are 1:1 with the original Claude Design mockup; some
  imagery is workshop-supplied and unoptimized beyond basic JPEG
  compression.
- No CMS — copy changes (services, roles, hours) require editing
  `index.html` directly.
- `robots.txt`/`sitemap.xml`/OG tags reference a placeholder domain until
  the real deployment URL is known (see Deployment instructions above).
- The nav/hero brand mark uses the Mercedes-Benz badge (`assets/mercedes.png`)
  as a stand-in — the original `assets/mark.png` pulled from the Claude
  Design project was corrupted (missing image data) and had to be dropped;
  see HANDOFF.md.

## Future improvements

- Swap the stand-in Mercedes-Benz badge mark for a proper MBS logo/mark if
  one exists.
- Update the placeholder domain in `robots.txt`, `sitemap.xml`, and the OG
  meta tags once deployed.
- Consider a lightweight CMS or JSON data file for services/roles if they
  change often.
