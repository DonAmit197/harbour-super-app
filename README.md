# Harbour Super member website (Phase 1)

A mobile-first React website for **Harbour Super**, a fictional super fund. It is the member-facing shell that will
host the Pega Constellation **Retirement Manager** application. The Retirement Manager page embeds the Pega Retirement Income Application with Pega Web Embed.

Live demo: https://donamit197.github.io/harbour-super-app/

## What you can try
- **Existing member:** Home → Log in → Dashboard → Retirement Manager.
- **Planning:** Home → Your retirement planner → Retirement Manager → Log in → Dashboard → Retirement Manager.
- **Not a member:** Retirement planner → Become a member.

Every other link goes to the "Page not found" page on purpose. All figures are fake and display-only.

## Run it locally
```bash
npm install
cp .env.example .env        # then fill in the demo username and password
npm run dev                 # http://localhost:5173/harbour-super-app/
```

| Command | What it does |
|---|---|
| `npm run build` then `npm run preview` | Production build and local check |
| `npm run lint` | ESLint, plus `check:lines` (no script file of 100 lines or more) |
| `npm run test` | Unit tests (Vitest and Testing Library) |
| `npm run test:e2e` | Journeys, links, accessibility, mobile and keyboard checks (Playwright, phone and desktop) |
| `npm run copy:assets` | Copies logos, icons and compressed photos from `assets/` into the app |

## About the demo login
The login is a **demo gate, not security**. `VITE_` values are bundled into the browser JavaScript, so anyone can
read them. Real authentication (OAuth with PKCE against Pega) arrives in Phase 2.

## Brand and design tokens
`assets/harbour-super-styleguide.json` is the only place colours, fonts, sizes, radii, spacing and breakpoints are
defined. A Vite plugin in `build-tools/` turns it into Tailwind and DaisyUI theme CSS on every dev start and build.
Change a value, save, and the whole site updates.

## Deploying (GitHub Pages)
`.github/workflows/deploy.yml` runs on every push to `main`: install, lint, unit tests, build, then publish.

One-time setup in the GitHub repository:
1. **Settings → Pages → Source:** GitHub Actions.
2. **Settings → Secrets and variables → Actions → Secrets:** add `VITE_DEMO_USERNAME` and `VITE_DEMO_PASSWORD`.
3. **Settings → Secrets and variables → Actions → Variables:** add `VITE_BASE_PATH` = `/harbour-super-app/`.

Check the live site with the end-to-end tests:
```bash
BASE_URL=https://donamit197.github.io/harbour-super-app/ npx playwright test
```

## Moving to the organisation's GitHub
Only three things change:
1. Point git at the new repository: `git remote set-url origin <new repository URL>`.
2. Set `VITE_BASE_PATH` to `/<new repository name>/` (or `/` for a custom domain), in `.env` and in the Actions variable.
3. Add the same Actions secrets and variable in the new repository.

## Pega Web Embed
The Retirement Manager page renders `src/features/pega/ConstellationEmbed.tsx`. It loads `pega-embed.js` only on that page
and mounts `<pega-embed>` inside `<div id="pega-constellation-root">`. The server URL, app alias, case type and OAuth
client ID live in `src/features/pega/pegaEmbedConfig.ts` (none are secret). The Pega OAuth client must allow every site
origin that hosts the embed, for example `http://localhost:5173` and `https://donamit197.github.io`.
