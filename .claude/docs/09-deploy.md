# 09 · Deploy to GitHub Pages

## Now: personal account
- Repository: `DonAmit07/harbour-super-app` (ask the user before creating it or pushing; confirm the name).
- Site URL: `https://donamit07.github.io/harbour-super-app/`.
- Vite `base` and the router `basename` both come from `VITE_BASE_PATH` (default `/harbour-super-app/`).

## Workflow: `.github/workflows/deploy.yml`
- Trigger on push to `main` and manual run.
- Steps: checkout, setup Node LTS, `npm ci`, `npm run lint`, `npm run test`, `npm run build`,
  copy `dist/index.html` to `dist/404.html` (so deep links like `/dashboard` load the app),
  upload with `actions/upload-pages-artifact`, deploy with `actions/deploy-pages`.
- Read `VITE_DEMO_USERNAME`, `VITE_DEMO_PASSWORD` and `VITE_BASE_PATH` from repository Actions variables or secrets.
  Tell the user exactly which ones to add under Settings > Secrets and variables > Actions.
- Pages source: GitHub Actions (Settings > Pages).

## Later: organisation repository
Moving should need only:
1. A new remote (`git remote set-url origin …`).
2. `VITE_BASE_PATH` set to the new repository name (or `/` for a custom domain).
3. The same Actions variables added in the new repository.
Do not hard-code the account name or path anywhere else. Document these three steps in the README.

## After deploying
Run the Playwright journey and accessibility specs against the live URL (`BASE_URL` env var) and report the result.
