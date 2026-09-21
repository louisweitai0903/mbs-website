# Architecture

This is a static, single-page website with no backend, no build step, and
no client-side framework.

## Rendering model

`index.html` is the entire document — one HTML file containing all six
sections (Hero, Our Story, Services, Brands, Careers, Contact) as plain
markup. There is no client-side routing; navigation between sections is
plain anchor scrolling (`<a href="#services">` etc.).

## Styling

All visual styling lives in `styles.css`, loaded once via `<link>` in
`<head>`. CSS custom properties (`--cream`, `--ink`, `--slate`, `--blue`)
in `:root` hold the brand palette so colors stay consistent and easy to
retheme. Responsive behavior is handled with two `@media` breakpoints
(900px, 520px) that collapse the multi-column grid sections to a single
column and adjust type/spacing for mobile.

## Behavior

`script.js` is the only JavaScript on the page. It does one thing: toggles
a `.scrolled` class on the `<nav>` element once the user scrolls past 70px,
which CSS uses to fade in a background blur and the compact brand mark.
There is no other interactivity — no form handling, no client-side state,
no fetch calls.

## Why not the original Claude Design runtime

The source design (`MBS Service Centre.dc.html`) used a proprietary
"design canvas" format: a `<x-dc>` custom element, `{{ }}` template
bindings, `<sc-for>` loops, and a generated `support.js` runtime that
renders everything through React at view time. That's appropriate for
live-editing inside the design tool, but not for a production site — it
would mean shipping React plus a template interpreter to render content
that never actually changes at runtime. This project intentionally
"pre-renders" that same output as static markup instead.