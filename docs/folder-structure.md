# Folder Structure

```
MBS-Website/
├── index.html          # The entire site — all six sections
├── styles.css          # All visual styling, palette, responsive rules
├── script.js           # Nav scroll-class toggle (only JS on the site)
├── assets/             # Images referenced by index.html
│   ├── mark.png         # Small brand mark (nav + hero)
│   ├── hero.jpg          # Hero photo (Mr. Tai + Mercedes-Benz SL)
│   ├── story.jpg          # Workshop detailing photo (Our Story section)
│   ├── ravenol.png       # Ravenol oil brand logo
│   ├── mercedes.png       # Brand grid logo
│   ├── bmw.png             # Brand grid logo
│   ├── audi.png             # Brand grid logo
│   ├── vw.png                # Brand grid logo
│   ├── porsche.png            # Brand grid logo
│   ├── toyota.png               # Brand grid logo
│   ├── mazda.png                  # Brand grid logo
│   └── honda.png                    # Brand grid logo
├── docs/                # This documentation folder
│   ├── architecture.md
│   ├── folder-structure.md
│   ├── setup.md
│   └── ...
├── README.md            # Project overview, setup, deployment
├── STATUS.md            # Current project health/state
├── PROGRESS.md          # Development journal
└── HANDOFF.md           # Continuity notes for the next session
```

There is no `src/`, no build output directory, and no package manifest —
the site ships exactly the files above with zero transformation.