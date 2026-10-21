# 05 · Demo login and environment

## One shared demo login
Every visitor logs in with the same demo account.

`.env` (gitignored):
```
VITE_DEMO_USERNAME=alchemy_osh_3
VITE_DEMO_PASSWORD=Rules@123
VITE_BASE_PATH=/harbour-super-app/
```
Also create `.env.example` with the same keys and empty credential values, and commit that one.

Be honest about this in the README: `VITE_` values are bundled into the browser JavaScript, so anyone
can read them. This is a demo gate, not security. Real authentication arrives with Pega in Phase 2.

## How it works
- `checkDemoCredentials(username, password)` lives in `features/auth/demoLogin.ts` (the user's global settings
  block file names containing "credentials"). It compares trimmed username (case-insensitive) and exact password
  with `import.meta.env`. Keep it in `features/auth/` behind a small `AuthProvider` so it can be swapped for OAuth later.
- On success, store `{ signedIn: true }` in `sessionStorage` (cleared when the tab closes) and go to `/dashboard`.
- `RequireAuth` wraps `/dashboard` and `/retirement-manager`. Signed-out visitors go to `/login`, keeping the
  wanted page in `?next=`. If `next=retirement-manager`, show the notice "Log in to continue to Retirement Manager."
  The brief lands everyone on `/dashboard` after logging in; keep that behaviour.
- Visiting `/login` while signed in redirects to `/dashboard`.
- Log out (in the member profile menu and mobile menu) clears the session and returns to `/`.

## Errors
- Empty fields: field-level messages, e.g. "Enter your username." and "Enter your password."
- Wrong details: a summary at the top of the form, "The username or password is not right. Check them and try again.",
  in a `role="alert"` region, and focus moves to the summary. Do not say which field was wrong.
- Buttons stay enabled; validate on submit.
- The password field has a "Show password" toggle button with `aria-pressed`.

## GitHub Pages build
`.env` is not committed, so the deploy workflow must provide the values. Store `VITE_DEMO_USERNAME`,
`VITE_DEMO_PASSWORD` and `VITE_BASE_PATH` as repository Actions variables or secrets (see `09-deploy.md`).
