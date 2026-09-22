# HANDOFF

## Failed attempts

- Tried fetching `assets/hero.jpg`, `assets/story.jpg`, `assets/logos.png`
  via the DesignSync `get_file` method (base64), which worked for
  `mark.png` but is slow/expensive for larger images — the user offered to
  drop the files in directly instead, which is the faster path going
  forward for any remaining/replacement imagery.
- `assets/mark.png` (the small brand mark) came back **corrupted** every
  single time it was pulled via DesignSync `get_file` (3 attempts) — valid
  PNG signature + IHDR, but no IDAT/IEND chunks, i.e. no actual pixel data.
  It rendered as silently invisible in real browsers (blank, because
  `alt=""`), which is why it went unnoticed through several rounds of
  screenshot review — the icon is only 15-17px tall and easy to miss.
  Root cause looks like a transfer/context issue with very long base64
  payloads passing through this tool, not a problem on the design-project
  side. **Don't re-attempt pulling this specific file the same way** — if
  a real MBS mark is ever supplied, have the user drop the file directly
  into `assets/` instead (same pattern already used for hero/story/logos).
  Currently `assets/mercedes.png` (the Mercedes-Benz badge, already in the
  repo for the Brands section) is used as a stand-in per the user's
  explicit direction — this is a deliberate temporary choice, not a bug.
- `tidy` initially reported `<nav>`/`<section>` as "not recognized" — this
  is because the installed `tidy` binary predates HTML5 and doesn't know
  those elements; not a real issue. Filter those specific warnings out
  when re-running tidy, don't chase them.
- `sips` chokes on SVG→raster at requested thumbnail sizes when the SVG's
  own `width`/`height` attributes don't match — `qlmanage -t -s N` forces
  a **square** canvas and top-left-anchors non-square content, padding the
  rest with white, rather than scaling to fill. Fix: set the SVG's root
  `width`/`height` to the actual target render size before generating the
  thumbnail (or crop the square output down to the real aspect ratio
  afterward with `sips --cropToHeightWidth`), don't just resize/stretch it.

## Status summary

See `STATUS.md` for full detail. Short version: v1.1.0, green. Feature-
complete, fully validated (HTML/CSS/JS + every asset checked to actually
decode, not just exist), favicon/OG/robots.txt/sitemap.xml added. Pushed
to GitHub `main`. Not yet deployed anywhere — user is doing the Vercel
deployment themselves.

## Progress summary

See `PROGRESS.md` for full detail. Short version: built the static site
from the Claude Design import (2026-09-21), then did a production-
readiness pass (2026-09-22): created the GitHub repo and pushed, iterated
on the Our Story section sizing per user feedback (checked live via
Claude in Chrome each round), added a scroll progress bar with a live
percentage badge, added favicon/OG-Twitter cards/robots.txt/sitemap.xml,
and fixed the corrupted `mark.png` by swapping in `mercedes.png`.

## Session changes

- Repo: `git init -b main`, committed, and pushed to
  `https://github.com/louisweitai0903/mbs-website` (public). `gh` is
  authenticated as `louisweitai0903`. The production-readiness changes
  below (favicon, OG tags, robots.txt, sitemap.xml, mark.png fix, story
  section sizing, scroll progress bar) are **committed locally but not yet
  pushed** — confirm with the user before pushing again, per their
  "never push without being explicitly told" rule; the earlier push was
  explicitly requested, this batch has not been yet.
- `index.html`: added favicon `<link>`s, OG/Twitter meta tags (image URLs
  point at placeholder domain `mbs-website.vercel.app` — fix post-deploy),
  scroll-progress markup (`#scroll-progress`, `#scroll-progress-bar`,
  `#scroll-progress-pct`), and swapped both `assets/mark.png` references
  to `assets/mercedes.png`.
- `styles.css`: Our Story section settled at 62% width photo (natural
  aspect, no crop/stretch) and ~14px body text after two rounds of
  feedback (see PROGRESS.md for the full iteration history — don't redo
  the flex/object-fit stretch approach, it was explicitly rejected as
  "too zoomed in"). Scroll-progress bar is 6px thick with a bottom-right
  percentage pill.
- `script.js`: scroll handler now also computes and writes scroll
  percentage into both the bar's `width` and the pct badge's text.
- New non-code files at repo root: `.gitignore`, `robots.txt`,
  `sitemap.xml`.
- New assets: `favicon.svg` (hand-authored, navy rounded square + cream
  "M"), `favicon-32.png`, `apple-touch-icon.png` (180x180), `og-image.svg`
  + `og-image.png` (1200x630 social card) — all rasterized locally via
  macOS `qlmanage`, no external service used.
- Deleted `assets/mark.png` (corrupted, unrecoverable — see Failed
  attempts above).
- Local preview server on port 8842 was used repeatedly and killed after
  each check — not running at end of session.

## Next steps

- **Ask the user whether to push the current commits** (production-
  readiness batch) to `origin/main` — they've been made locally but a
  fresh push wasn't explicitly requested for this batch.
- Once the user deploys on Vercel: update the placeholder domain in
  `robots.txt` (`Sitemap:` line), `sitemap.xml` (`<loc>`), and
  `index.html` (`og:image`/`twitter:image`) to match the real URL.
- Consider asking the client if a real MBS logo/mark exists to replace the
  Mercedes-Benz badge stand-in.
- No open questions on content — all copy was carried over verbatim from
  the approved design.
