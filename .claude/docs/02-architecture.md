# 02 · Tech stack and architecture

## Stack
- Vite + React + TypeScript (strict mode)
- React Router (data router, `createBrowserRouter`, with `basename` from the base path)
- Tailwind CSS v4 + DaisyUI v5 (DaisyUI only for behaviour-heavy parts: drawer, collapse, dialog)
- Lenis for smooth scrolling (`lenis` package)
- Fonts: `@fontsource/poppins` (500, 600) and `@fontsource/inter` (400, 500, 600), self-hosted
- Icons: the exported SVGs in `assets/icons/Icon/`, imported as React components with `vite-plugin-svgr`
- Tests: Vitest + Testing Library, Playwright + `@axe-core/playwright`

## Folder structure
```
assets/                 design inputs (mocks, branding PDFs, style guide JSON). Not shipped, except files copied to public/
build-tools/            Vite plugin that turns the style guide JSON into CSS (see 03)
public/brand/           logo.svg, logo-reverse.svg, mark.svg, favicon.png
public/images/          hero.jpg, hero-mobile.jpg, login.jpg (compressed by scripts/optimise-images.mjs)
src/
  app/                  App.tsx, router.tsx, providers
  pages/<PageName>/     one folder per page; the page file only composes sections
  components/ui/        Button, TextField, Card, Notice, Chip, IconTile, SegmentedControl, Icon, Logo, VisuallyHidden
  components/layout/    PublicLayout, MemberLayout, SiteHeader, MemberHeader, MobileMenu, SiteFooter, SkipLink
  components/charts/    BalanceLineChart, InvestmentMixDonut, ContributionBars (plain SVG)
  features/auth/        AuthProvider, useAuth, RequireAuth, checkDemoCredentials
  features/pega/        ConstellationPlaceholder (the future embed slot)
  features/scroll/      useSmoothScroll (Lenis), ScrollToTopOnRouteChange
  content/              navigation, page copy and demo data as typed objects
  hooks/                usePageTitle, useFocusMainHeading
  styles/               index.css, generated/theme.css (generated, do not edit)
tests/e2e/              Playwright specs
scripts/                check-file-length.mjs, copy-assets.mjs
```

## Component rules
- A component does one job. If it passes 100 lines, split it (e.g. `BalanceCard` = `BalanceHeader` + `BalanceLineChart`).
- Pages contain sections; sections contain UI components; UI components contain no page copy.
- Props are typed with a named `type` (e.g. `type ButtonProps`). No `any`.
- Variants through props (`<Button variant="accent" size="small">`), mapped to token classes in one place.
- Links use React Router `Link`; actions use `<button>`. Never a clickable `div`.
- Unbuilt destinations use `<FutureLink>`: a `Link` to `/not-found` with the same look.

## Naming
- Components and files: PascalCase (`RetirementBanner.tsx`). Hooks: `useSomething`. Data: camelCase (`dashboardData.ts`).
- Route paths: lowercase kebab-case (`/retirement-planner`).
- Names describe purpose, not looks: `RetirementManagerButton`, not `YellowButton`.

## File length
`scripts/check-file-length.mjs` fails the build if any `.ts`, `.tsx`, `.js` or `.mjs` file in `src/`,
`build-tools/`, `scripts/` or `tests/` has 100 lines or more. Run it in `npm run lint`.
