# CLAUDE.md — Brilliance-FS

This file documents the codebase for AI assistants (Claude Code and similar tools). Keep it up to date as the project evolves.

---

## Project Overview

**Brilliance-FS** is a marketing/informational website for a facility services company. It is a React 17 single-page application (SPA) deployed to GitHub Pages. There is no backend, no database, and no API integration — this is a purely frontend project.

Live URL: `https://esanchez450.github.io/brilliance-fs/`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 17 (Create React App) |
| Routing | react-router-dom v5 (`BrowserRouter`, `Switch`, `Route`) |
| UI Components | Material-UI v4 (`@material-ui/core`, `@material-ui/icons`) |
| Responsive utilities | react-responsive v8 |
| Testing | Jest + React Testing Library |
| Deployment | gh-pages (GitHub Pages) |
| Package manager | npm (primary) — yarn.lock also present |

---

## Repository Structure

```
brilliance-fs/
├── public/                  # Static assets served as-is
│   ├── index.html           # SPA shell (title: "Brilliance FS")
│   ├── manifest.json        # PWA manifest
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── robots.txt
├── src/
│   ├── App.js               # Root component — sets up Router + page layout
│   ├── App.css              # Global app styles
│   ├── App.test.js          # Single smoke test
│   ├── index.js             # React entry point (ReactDOM.render)
│   ├── index.css            # Base global CSS
│   ├── logo.svg             # Brilliance logo (used in Nav)
│   ├── reportWebVitals.js   # CRA performance monitoring hook
│   ├── setupTests.js        # Jest DOM setup (@testing-library/jest-dom)
│   ├── components/
│   │   ├── Nav.js           # Navigation bar + mobile dropdown menu
│   │   ├── Home.js          # Home page
│   │   ├── Solutions.js     # Services listing page
│   │   ├── About.js         # About page
│   │   ├── Contact.js       # Contact page (form + phone/email)
│   │   ├── Blog.js          # Blog page (stub)
│   │   ├── Footer.js        # Footer component
│   │   └── action_page.js   # Empty file — can be removed or used for form handling
│   └── css/
│       ├── nav.css
│       ├── home.css
│       ├── solutions.css
│       ├── about.css
│       ├── contact.css
│       ├── blog.css
│       ├── footer.css
│       └── test.css
├── _config.yml              # Jekyll theme config (GitHub Pages: jekyll-theme-slate)
├── package.json
├── package-lock.json
├── yarn.lock
└── README.md                # Default CRA readme
```

---

## Routing

Routes are defined in `src/App.js` using React Router v5:

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | `exact` match only |
| `/brilliance-fs` | `Home` | Handles GitHub Pages base path |
| `/solutions` | `Solutions` | |
| `/about` | `About` | |
| `/contact` | `Contact` | `exact` |
| `/blog` | `Blog` | `exact` |

`Nav` and `Footer` are rendered on every route outside the `Switch`.

---

## Component Conventions

- All components are **function components** using React hooks.
- Each component lives in `src/components/<ComponentName>.js` with a corresponding CSS file in `src/css/<name>.css`.
- CSS is imported directly into each component file: `import '../css/nav.css'`.
- Components use **Material-UI v4** for UI elements (icons, buttons, menus). Always import from `@material-ui/core` or `@material-ui/icons`, not v5+.
- Navigation links use `<Link>` from `react-router-dom` (not `<a>` tags) to avoid full page reloads.

### Nav.js specifics

`Nav.js` exports `Nav` as the default export and also defines two internal components:
- `MobileNav` — alternate nav layout for mobile (currently rendered but not wired to a responsive breakpoint — `intViewportWidth` is computed but unused).
- `MobileMenu` — Material-UI `Popover` + `Menu` dropdown, used inside both `Nav` and `MobileNav`.

The `intViewportWidth` variable is captured at module load time via `window.innerWidth`. It does **not** update on resize. A future improvement would be to use `react-responsive` (already installed) or a `resize` event listener.

---

## Development Workflow

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm start
# or
yarn start
```

Opens at `http://localhost:3000`. Hot-reload is enabled via CRA.

### Run tests

```bash
npm test
# or
yarn test
```

Runs Jest in interactive watch mode. Currently only one test exists (`App.test.js` — renders without crashing).

### Production build

```bash
npm run build
```

Output goes to `/build`. The bundle is minified and content-hashed.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (which runs `build`) then pushes the `/build` directory to the `gh-pages` branch via the `gh-pages` package. **Do not manually edit the `gh-pages` branch.**

---

## Known Issues / Technical Debt

- `src/components/action_page.js` is empty. Either implement or delete it.
- `MobileNav` component in `Nav.js` is defined but never conditionally rendered — the breakpoint logic using `intViewportWidth` is not reactive.
- `Solutions.js` renders the same list twice (in `solutions-container-1` and `solutions-container-2`) — likely a copy-paste placeholder.
- The contact form in `Contact.js` posts to `./contact`, which is a relative URL that doesn't resolve to a real endpoint. Form submissions have no backend handler.
- `<select>` in `Contact.js` uses the deprecated `selected` attribute on an `<option>` instead of a controlled React component or `defaultValue`.
- `src/css/test.css` appears to be a scratch/test file and may be unused.

---

## Styling Conventions

- Each page component has its own scoped CSS file in `src/css/`.
- Global/reset styles live in `src/index.css` and `src/App.css`.
- Material-UI v4 styling uses the default theme; no `ThemeProvider` or `makeStyles` is currently active (a `makeStyles` block in `Nav.js` is commented out).
- No CSS preprocessor (no Sass/Less) — plain CSS only.

---

## Testing Conventions

- Tests live alongside source: `src/App.test.js`.
- Use `@testing-library/react` for rendering, `@testing-library/user-event` for interactions, and `@testing-library/jest-dom` for DOM assertions.
- Run with `npm test`. CI does not currently exist, so tests must be run manually before pushing.
- When adding new components, add a corresponding test file `src/components/<Name>.test.js`.

---

## Deployment Notes

- The `homepage` field in `package.json` is set to `https://esanchez450.github.io/brilliance-fs/`. This is required for CRA to generate correct asset paths for GitHub Pages subdirectory hosting.
- The `/brilliance-fs` route in `App.js` exists to handle the GitHub Pages base path correctly.
- There is no CI/CD pipeline. Deployments are manual via `npm run deploy`.
- `_config.yml` sets the Jekyll theme for the GitHub Pages site — this only affects the default GitHub Pages rendering, not the React app itself.

---

## What NOT to Do

- **Do not run `npm run eject`** — this is irreversible and would expose the CRA webpack config.
- **Do not push directly to the `gh-pages` branch** — it is managed by the `gh-pages` package.
- **Do not upgrade to Material-UI v5** without a full migration plan — the API changed significantly (imports, theming, `sx` prop, etc.).
- **Do not upgrade to React Router v6** without updating all `Switch`/`Route` usage — the API changed substantially.
- **Do not add a backend or database** without first creating the necessary infrastructure (server, env vars, security review).
