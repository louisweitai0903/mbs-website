# PROGRESS

## 2026-09-22 — Production-readiness pass + GitHub repo

**Task:** Create the `mbs-website` GitHub repo and push `main`; iterate on
the Our Story section proportions per feedback; add a scroll progress bar;
make the site production-ready and confirm what "running it in prod"
actually means for a static site.

**Files modified:**
- `index.html` (favicon links, OG/Twitter meta tags, scroll-progress
  markup, mark.png → mercedes.png swap)
- `styles.css` (story section sizing iterations, scroll-progress bar +
  percentage badge styles)
- `script.js` (scroll-progress width/percentage tracking)
- `assets/favicon.svg`, `assets/favicon-32.png`,
  `assets/apple-touch-icon.png`, `assets/og-image.svg`,
  `assets/og-image.png` (new)
- `assets/mark.png` (deleted — corrupted, unrecoverable)
- `robots.txt`, `sitemap.xml` (new)
- `.gitignore` (new)
- `README.md`, `STATUS.md`, `HANDOFF.md` (updated)

**Summary of implementation:**
- Created the public GitHub repo `louisweitai0903/mbs-website` via `gh repo
  create --source=. --push` and pushed the initial commit to `main`.
- Story section: first pass increased body font size per request, which
  made the section look oversized/dominant next to Services/Brands/Careers.
  Diagnosed the real issue live via Claude in Chrome — the photo's natural
  height fell well short of the text column, leaving a large empty gap.
  Tried `flex: 1` + `object-fit: cover` to stretch the photo to match; user
  found this too zoomed-in/dominant. Final fix: shrank the photo to 62%
  width at its natural (uncropped) aspect ratio and reduced body text back
  to ~14px, bringing the section's visual weight in line with the rest of
  the page — confirmed via a full-page screenshot comparison.
- Added a scroll progress bar fixed to the bottom of the viewport
  (`#scroll-progress` / `#scroll-progress-bar`), tracked via a `scroll`
  listener computing `scrollY / (scrollHeight - innerHeight)`. Iterated per
  feedback: thickened 3px → 6px, added a live percentage badge (pill,
  cream background, 1px ink border) in the bottom-right corner.
- Production-readiness pass, prompted by the user asking what "prod ready"
  actually means for a static site with no build step: added a hand-built
  SVG favicon (avoids relying on the corrupted `mark.png`) with PNG/
  apple-touch-icon fallbacks rasterized via macOS `qlmanage` (no
  ImageMagick/PIL available); added Open Graph + Twitter Card metadata
  with a matching 1200x630 SVG-built social image; added `robots.txt` and
  `sitemap.xml` against a placeholder Vercel domain, clearly flagged in
  README/STATUS for correction post-deploy.
- Discovered mid-task that `assets/mark.png` was corrupted from the very
  first import — valid PNG signature and IHDR, but missing IDAT/IEND (no
  actual pixel data), so it silently failed to render in real browsers the
  whole time (invisible due to `alt=""`, easy to miss in prior screenshots).
  Re-fetching it via DesignSync three times produced the same corruption,
  pointing at a transfer issue with very long base64 payloads through this
  tool rather than a source-side problem. User directed using
  `assets/mercedes.png` (already in the repo) as the nav/hero mark instead
  of designing a new one; swapped both references and deleted the dead
  file.
- User initiated GitHub (`gh auth login`) and Vercel (`vercel login`)
  authentication themselves in background shells — Vercel login was left
  incomplete; user opted to finish the actual Vercel deployment themselves.

**Validation performed:**
- `tidy -q -e -utf8 index.html` clean; `node -c script.js` clean; CSS
  brace-balance check clean.
- Every `assets/...` reference in `index.html` verified to resolve to an
  existing file, and every image asset verified to actually decode
  (`sips`/XML parse), not just exist on disk — the check that would have
  caught the `mark.png` corruption earlier.
- Full-page headless-Chrome screenshots and live Claude-in-Chrome checks
  (including computed-style inspection via `javascript_tool`) at each
  iteration of the story-section and scroll-progress-bar work.

**Remaining concerns:**
- `robots.txt`, `sitemap.xml`, and the OG/Twitter image URLs still point
  at a placeholder domain — must be corrected once the real Vercel URL (or
  custom domain) is known.
- The brand mark is a Mercedes-Benz badge standing in for a real MBS logo;
  fine as a stopgap but worth revisiting if the client has an actual mark.
- Not deployed yet — repo is push-ready on `main`; user will complete
  Vercel login and deployment themselves.

## 2026-09-21 — Initial site build from Claude Design import

**Task:** Convert the "MBS Service Centre" Claude Design project
(`https://claude.ai/design/p/a96ffc7b-2f23-474e-89a4-96ca2f1f15f5`) into a
real, deployable static website.

**Files modified:**
- `index.html` (new)
- `styles.css` (new)
- `script.js` (new)
- `assets/` (new — hero.jpg, story.jpg, mark.png, ravenol.png, and 8 brand
  logo PNGs: mercedes, bmw, audi, vw, porsche, toyota, mazda, honda)
- `README.md`, `STATUS.md`, `PROGRESS.md`, `HANDOFF.md`, `docs/` (new)

**Summary of implementation:**
- Read the source `.dc.html` file and `support.js` via the DesignSync MCP
  tool. Confirmed `support.js` is a generated design-canvas runtime
  (React-based, templated with `{{ }}` bindings and `<sc-for>` loops) meant
  for the design tool's live preview, not for production — so it was not
  carried over.
- Rebuilt the single page as plain semantic HTML5 with an external
  stylesheet and a small vanilla-JS file, preserving the original visual
  design (colors, type, spacing, copy) exactly.
- Converted the design tool's `style-hover="..."` pseudo-attribute into
  real CSS `:hover` rules, and its scroll-driven inline style object (nav
  background/blur fade-in) into a `.scrolled` class toggled by
  `script.js`.
- Expanded the `<sc-for>`-templated Services (10 items) and Careers (5
  roles) lists into static markup, since the content is fixed editorial
  copy rather than dynamic data — avoids pulling in a templating
  dependency for content that doesn't change at runtime.
- Sourced imagery: `mark.png` and `ravenol.png` pulled directly from the
  design project via DesignSync; `hero.jpg`, `story.jpg`, and the 8 brand
  logos were supplied directly by the user (workshop's own photos/logos)
  since they matched the design's intended images 1:1. Compressed/resized
  the two photos (hero: PNG→JPEG; story: downscaled from 1440×2560).
- Replaced the design's single flattened `logos.png` brand strip with a
  proper CSS grid of the 8 individual logo images (each with its own
  `alt` text) for better accessibility and image quality.

**Validation performed:**
- `tidy -q -e -utf8 index.html` — no markup errors (after escaping `&` in
  the Google Fonts URL).
- `node -c script.js` — syntax OK.
- Verified every `assets/...` path referenced in `index.html` resolves to
  an existing file.
- Served locally with `python3 -m http.server` and confirmed the page
  loads (HTTP 200).

**Remaining concerns:**
- Not yet visually verified in an actual browser window (no browser
  automation available in this session) — recommend opening
  `http://localhost:8842` (or re-serving) and checking layout, nav scroll
  behavior, and all links before shipping.
- No favicon configured yet.
