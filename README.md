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

Deployed as a static site on Vercel: **https://mbs-website-ten.vercel.app/**
(connected to the `main` branch of this repo — pushing to `main` redeploys
automatically). No build command, no output directory, no environment
variables required. Any other static host (Netlify, GitHub Pages, S3 +
CloudFront) would work the same way if ever needed — point it at the repo
root.

If the domain ever changes (custom domain, new Vercel project, etc.),
update it in three places: `robots.txt` (`Sitemap:` line), `sitemap.xml`
(`<loc>`), and `index.html` (`og:image`/`twitter:image`, which must stay
absolute URLs for link-preview crawlers to fetch them).

## Known limitations

- Copy and structure are 1:1 with the original Claude Design mockup; some
  imagery is workshop-supplied and unoptimized beyond basic JPEG
  compression.
- No CMS — copy changes (services, roles, hours) require editing
  `index.html` directly.
- The nav/hero brand mark uses the Mercedes-Benz badge (`assets/mercedes.png`)
  as a stand-in — the original `assets/mark.png` pulled from the Claude
  Design project was corrupted (missing image data) and had to be dropped;
  see HANDOFF.md.

## Future improvements

- Swap the stand-in Mercedes-Benz badge mark for a proper MBS logo/mark if
  one exists.
- Consider a lightweight CMS or JSON data file for services/roles if they
  change often.
