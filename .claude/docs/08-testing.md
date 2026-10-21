# 08 · Testing (Claude Code must run these and report results)

Never mark a task done on "it should work". Run the checks, then say what ran and what passed.

## Every task
- `npm run lint` (includes `check:lines`) and `npx tsc --noEmit`: no errors.
- `npm run build`: succeeds.
- `npm run dev`, open the changed pages at 390px and 1440px in the browser, compare with the mockups.

## Unit tests (Vitest + Testing Library)
- UI components render with the right roles and accessible names (`getByRole('button', { name: … })`).
- `checkDemoCredentials`: correct, wrong, empty, extra spaces, username case.
- `RequireAuth` redirects signed-out users with the right `next` value.
- Token generator: produces every expected variable and fails clearly on a missing token.

## End-to-end tests (Playwright, against `npm run preview`)
Run each spec in two projects: **phone** (390 × 844, touch, mobile user agent) and **desktop** (1440 × 900).
- `journeys.spec.ts`: journeys A, B and C from 04 end to end, including the login notice and log out.
- `links.spec.ts`: every non-journey link on each page lands on the 404 page; every journey link lands where the matrix says.
- `auth.spec.ts`: protected routes redirect when signed out; wrong password shows the alert and moves focus.
- `accessibility.spec.ts`: `@axe-core/playwright` on every route (signed out and signed in), tags `wcag2a, wcag2aa, wcag21aa, wcag22aa`.
  Zero violations allowed. Also assert: one `h1`; skip link is first focusable; landmarks present; every link, button
  and field has a non-empty accessible name; focus lands on the `h1` after navigation.
- `mobile-first.spec.ts`:
  - no horizontal scroll at 320, 390, 768, 1024 and 1440 widths (`scrollWidth <= clientWidth`);
  - on phone, the desktop nav is hidden and the menu button is visible; the reverse on desktop;
  - every visible button and link on phone is at least 44px high (48px for primary actions);
  - body text computes to at least 16px on phone.
- `keyboard.spec.ts`: tab through each page; mobile menu traps focus and closes on Esc.

## Code checks
- `grep` the `src/` folder for `max-sm:`, `max-md:`, `@media (max-width`, `-[#`, `text-[`: none allowed.
- No file of 100 lines or more (`npm run check:lines`).

## Manual screen reader pass (Task 12)
Claude Code cannot run a screen reader. Write a short checklist into the progress file for a human to run
with NVDA on Windows and VoiceOver on iPhone: page titles, landmarks, headings list, form labels and errors,
chart summaries, menu dialog, Pega placeholder region.

## Report format
End each task with: commands run, pass or fail for each, anything skipped and why.
