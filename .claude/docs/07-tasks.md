# 07 · Task plan

Finish one task, check its "Done when", tell the user the result, then start the next.
Record status in the progress file at handoff.

```
 Foundations              Building blocks              Pages                      Quality and release
┌───────────────┐   ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────────┐
│ 1 Scaffold    │──▶│ 4 UI components      │──▶│ 7 Public pages       │──▶│ 12 Test and audit         │
│ 2 Tokens      │   │ 5 Layouts and scroll │   │ 8 Log in             │   │ 13 Deploy to GitHub Pages │
│ 3 Assets      │   │ 6 Demo auth          │   │ 9 Dashboard          │   └──────────────────────────┘
└───────────────┘   └──────────────────────┘   │ 10 Retirement Manager│
                                               │ 11 404 and link audit│
                                               └──────────────────────┘
```

**Task 1 · Scaffold.** Vite React TS app in this folder (keep `assets/`, `.claude/`, `progress/`). Install the stack from 02.
Set `base` from `VITE_BASE_PATH`. Create `.env`, `.env.example`, `.gitignore` (node_modules, dist, .env, src/styles/generated).
Add scripts: dev, build, preview, lint, test, test:e2e, check:lines. `git init` with first commit.
Done when: `npm run dev` serves a blank page at `/harbour-super-app/` and `npm run check:lines` passes.

**Task 2 · Design tokens.** Build the JSON → `theme.css` plugin (03). Remove the JSON `tailwind` block. Wire fonts.
Done when: a test page shows token colours, fonts and the type scale, and the "change teal-700 to red" check works.

**Task 3 · Assets.** `scripts/copy-assets.mjs` copies and renames runtime assets (04) and rewrites SVG strokes to `currentColor`.
Build `Icon` (by name) and `Logo` (full, reverse, mark). Add favicon. Done when: all 41 icons render in any colour.

**Task 4 · UI components.** Button (5 variants × 2 sizes, optional arrow), FutureLink, TextField, PasswordField, Card,
IconTile, Notice (info, warning, demo), Chip, SegmentedControl, Accordion, VisuallyHidden, SkipLink.
Done when: a `/dev/components` route (dev only) shows them all and unit tests cover Button, TextField and Accordion.

**Task 5 · Layouts and scrolling.** PublicLayout (SiteHeader, MobileMenu, SiteFooter with mobile accordion),
MemberLayout (MemberHeader with active state and Retirement Manager button rule), Lenis, scroll-to-top, focus-on-h1, page titles.
Done when: layouts match the mockups at 390 and 1440 and keyboard-only navigation works.

**Task 6 · Demo auth.** AuthProvider, `checkDemoCredentials`, RequireAuth, `?next=` handling, log out (05).
Done when: unit tests cover right, wrong and empty credentials and the protected-route redirect.

**Task 7 · Public pages.** Home, Retirement planner, Join, copy in `src/content/`. Done when: they match the mockups at both widths.

**Task 8 · Log in.** Mobile and desktop layouts, notice for `next=retirement-manager`, errors and focus (05).

**Task 9 · Dashboard.** Greeting, Retirement Manager banner, balance card with line chart and period control, quick actions,
nomination alert, investment mix donut, contributions bars, transactions, insurance. Data from `src/content/dashboardData.ts`.

**Task 10 · Retirement Manager.** Breadcrumb, title, `ConstellationPlaceholder` slot, side panel, header button hidden.

**Task 11 · 404 and link audit.** Build the 404 page. Walk every link on every page against the link matrix in 04.

**Task 12 · Test and audit.** Everything in 08. Fix issues before moving on.

**Task 13 · Deploy.** GitHub Actions to GitHub Pages under DonAmit197 (09). Done when: the live URL passes the journey tests.
