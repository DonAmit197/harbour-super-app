# Harbour Super member website (Phase 1 shell)

A mobile-first React website for the fictional super fund **Harbour Super**. It is the
member-facing shell that will host the Pega Constellation **Retirement Manager** app.
In this phase the Pega app is a labelled placeholder only.

## Start of every session
1. Read the single `*_Progress.md` file at the top of `progress/` (older ones are in `progress/archived/`). Resume from its "Next steps".
2. If there is no progress file at the top of `progress/`, start at Task 1 in `docs/07-tasks.md`.
3. Work one task at a time. Do not start the next task until the current one meets its "Done when".

## Sources of truth (in this order)
1. This file and the docs below.
2. Screen mockups: `assets/mocks/*.png` (phone = "– Mobile", desktop = "– Desktop"). Match layout, copy and hierarchy.
3. Brand tokens: `assets/harbour-super-styleguide.json`. The ONLY place colours, fonts, sizes, radii and spacing are defined.
4. Brand reference: `assets/branding/*.pdf` (read-only, for checking).
If a mockup and these docs disagree, the docs win (see "Agreed changes" in `docs/04-screens-and-routes.md`).

## Rules that always apply
- Mobile first: unprefixed Tailwind classes are for phones; add `md:` / `lg:` for larger screens. Never use max-width media queries.
- Every `.ts` / `.tsx` / `.js` file stays under 100 lines. Split into smaller components, hooks or data files instead.
- Component architecture: small, reusable components; pages only compose them. Copy and demo data live in `src/content/`.
- Clear, human names (`MemberHeader`, `useDemoLogin`, `BalanceCard`). No abbreviations like `Hdr`, `fn2`.
- No heavy comments. One short line only where intent is not obvious from the code.
- No hard-coded colours, font sizes or radii in components. Use the token utilities generated from the style guide JSON.
- Everything a user can see or use must be announced correctly by a screen reader (see `docs/06-accessibility-and-mobile.md`).
- Only the journey links work. Every other link goes to the 404 page.
- Test locally before saying a task is done. Report what you ran and the result.

## Detailed guidance (read before the related task)
@docs/01-overview.md
@docs/02-architecture.md
@docs/03-design-tokens.md
@docs/04-screens-and-routes.md
@docs/05-auth-and-env.md
@docs/06-accessibility-and-mobile.md
@docs/07-tasks.md
@docs/08-testing.md
@docs/09-deploy.md

## Handoff
When the user runs `/handoff`, follow `commands/handoff.md`: move older progress files to `progress/archived/`, write a new timestamped one, and stop.

## Quick commands (after Task 1)
- `npm run dev`: local site at http://localhost:5173/harbour-super-app/
- `npm run build` then `npm run preview`: production check
- `npm run test`: unit tests · `npm run test:e2e`: journeys, accessibility and mobile checks
- `npm run check:lines`: fails if any script file is 100 lines or more
