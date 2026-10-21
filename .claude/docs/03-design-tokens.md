# 03 · Design tokens: one JSON drives all styling

## Goal
Change a colour, font or size in `assets/harbour-super-styleguide.json`, save, and the whole
site updates. No other file holds brand values.

## Pipeline
```
assets/harbour-super-styleguide.json
        │  read by build-tools/harbourThemePlugin.ts (Vite plugin, dev and build)
        ▼
src/styles/generated/theme.css   ← generated, gitignored, never edited by hand
        │  imported by src/styles/index.css
        ▼
Tailwind v4 @theme utilities + DaisyUI "harbour" theme + CSS custom properties
```

## What the plugin generates
1. `:root` custom properties for every token, e.g. `--hs-color-navy`, `--hs-radius-card`.
2. A Tailwind v4 `@theme` block mapping to them:
   - colours: `--color-navy`, `--color-teal`, `--color-teal-700`, `--color-teal-900`, `--color-lagoon`,
     `--color-lagoon-50`, `--color-sand`, `--color-sun`, `--color-sun-50`, `--color-ink`, `--color-slate`,
     `--color-line` (border), `--color-mist`, `--color-positive`, `--color-positive-bg`, `--color-negative`
   - fonts: `--font-heading` (Poppins), `--font-sans` (Inter)
   - text sizes from `typography.scale`: `--text-display-xl`, `--text-display-l`, `--text-h2` … `--text-caption`,
     each with its `--line-height`, `--letter-spacing` and `--font-weight` companions
   - radii: `--radius-input`, `--radius-tile`, `--radius-card`, `--radius-panel`
   - `--container-content` from `spacing.contentMaxWidth`
   - breakpoints `xs` (390), `sm`, `md`, `lg`, `xl` from `breakpoints.tailwind`
3. A DaisyUI theme block (`@plugin "daisyui/theme" { name: "harbour"; default: true; … }`) mapping:
   primary = teal-700, primary-content = white, secondary = navy, accent = sun, accent-content = navy,
   neutral = ink, base-100 = white, base-200 = mist, base-300 = border, base-content = ink,
   info = lagoon-50, success = positive, error = negative, `--radius-field` = radius.input, `--radius-box` = radius.card.
4. Chart colours as `--hs-chart-1` … `--hs-chart-4`, used by the SVG chart components.
5. Utilities: `bg-gradient-banner`, `bg-gradient-hero-wash`, `border-strong` (`border.width.input`, inputs and
   secondary buttons) and `border-dashed-slot` (`border.embedPlaceholder.width`, the Pega slot).
   Note: current Chrome rounds borders down to whole pixels, so 1.5px shows as 1px there.

## Rules
- On JSON change in dev, the plugin regenerates `theme.css` and triggers a reload.
- The build fails with a clear message if a required token is missing.
- In Task 2, delete the `tailwind` block at the bottom of the JSON. It repeats values and would
  become a second source of truth. The plugin builds the Tailwind mapping itself.
- Components use only token utilities: `bg-navy`, `text-ink`, `rounded-card`, `text-h3`, `font-heading`.
  Arbitrary values like `bg-[#0F4C6B]` or `text-[22px]` are not allowed (grep for `-[#` and `text-[` in Task 12).
- Keep each plugin file under 100 lines: split into `readStyleGuide.ts`, `buildThemeCss.ts`,
  `buildDaisyTheme.ts`, `harbourThemePlugin.ts`.

## Check it works (part of Task 2)
Change `color.brand.teal-700.value` to a red, confirm primary buttons turn red without touching
any other file, then change it back.
