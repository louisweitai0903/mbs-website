# Setup

## Prerequisites

Any static file server, or just a browser. No package manager, no runtime,
no accounts/API keys.

## Local development

```bash
cd MBS-Website
python3 -m http.server 8000
```

Open http://localhost:8000. Edit `index.html`, `styles.css`, or
`script.js` and refresh the browser — there is no build/watch step.

## Deployment

Upload the site root as-is to any static host. See README.md's
"Deployment instructions" for specifics. No environment variables or
server-side configuration are required.