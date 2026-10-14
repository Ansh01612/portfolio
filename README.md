# Ansh Sharma — Antigravity-inspired AI Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step, framework, paid API or animation dependency is required.

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Run `python -m http.server 8000` from this folder (or use the VS Code Live Server extension).
4. Visit `http://localhost:8000`.

Opening `index.html` directly can work, but a local server is recommended.

## Deploy free
### GitHub Pages
1. Create a new public repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js` and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

## Customize
- Update contact and social links in `index.html`.
- Update project descriptions and live demo/repository links in the project cards.
- Replace the emoji avatar in `.avatar` with another emoji if you prefer.
- Resume PDFs are stored in `assets/`.
- `assets/portfolio-concept.png` is the generated design reference, not a required runtime asset.

## Effects included
- Canvas starfield and drifting particles
- CSS orbital rings, holographic cards and floating emoji avatar
- Scroll reveal animations and active section navigation
- Terminal-style command input that navigates to sections
- Pointer glow on desktop
- Mobile navigation and reduced-motion accessibility support

The visual effects are custom CSS/JavaScript inspired by antigravity visuals; this is not a Google Antigravity IDE integration.

## Accuracy notes
Project technologies and descriptions are based on the details provided. No unverified performance numbers or AI capabilities are claimed. Verify the live demos and downloadable resume files before publishing.


## If the browser still shows the old emoji
Stop and restart the local server, then hard-refresh the page with `Ctrl + F5`. The hero should render `assets/ansh-anime-hero.webp` rather than the previous emoji avatar.


The hero character is a separately generated transparent anime-style illustration (`assets/ansh-anime-hero.webp`), not a pasted screenshot of the full portfolio.


## Important: latest anime fix
The hero now loads `assets/ansh-anime-hero.webp?v=20261014-2`, a separate transparent character illustration. The previous JPG crop and full-page reference screenshot have been removed from the distributable package so they cannot accidentally be used as the hero.
If an older page is still open, stop the server, extract this ZIP into a new folder, start the server again, and hard-refresh with Ctrl+F5.


## Animated anime hero (latest fix)
The home-page character is now drawn directly in inline SVG and styled/animated with CSS. It does not load any screenshot or character image. The head/eyes/glasses/hair/headphones/hoodie/laptop, floating robot, hologram cards, orbit rings and particles are code elements.
To ensure you are seeing this version, extract this ZIP into a new folder and serve that folder, not your old project folder.
