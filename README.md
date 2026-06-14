# Static CV Website

This repository now serves a single-page static website without Hugo.

## Structure

- `index.html`: page content and sections.
- `assets/css/styles.css`: styling and responsive layout.
- `assets/js/main.js`: menu behavior, theme switcher, active section highlight.

## Local preview

Run any static server from the repository root, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

GitHub Pages deploys this repository directly as static files via `.github/workflows/hugo.yaml`.