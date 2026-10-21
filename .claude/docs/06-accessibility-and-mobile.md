# 06 · Accessibility, screen readers and mobile first

Target: WCAG 2.2 AA. Audience is mostly 60+, often on phones.

## Screen reader rules (everything must be announced)
- `<html lang="en-AU">`. Each route sets `document.title` as "<Page> – Harbour Super".
- Landmarks on every page: `header`, `nav` (with `aria-label`, e.g. "Main" and "Member"), `main#main`, `footer`.
- First focusable element is a "Skip to main content" link.
- Exactly one `h1` per page; headings never skip a level.
- On route change, move focus to the page `h1` (`tabIndex={-1}`) and announce the page title in a polite live region.
- Links go places, buttons do things. Icon-only controls (menu, bell, search, show password) have an `aria-label`.
- Decorative icons and images: `aria-hidden="true"` or `alt=""`. Meaningful images get real alt text
  (hero: "Two smiling older people walking a coastal path").
- Logo link: accessible name "Harbour Super home" (public) or "Harbour Super dashboard" (member).
- Current nav item has `aria-current="page"`.
- Form fields: visible `<label>`, helper linked with `aria-describedby`, errors set `aria-invalid` and are linked too.
- Charts are SVG with `role="img"` and an `aria-label` summary, plus a visually hidden table of the values.
- Balance change chip says it in words: "Up $24,516, 6.9%, over the past 12 months".
- FAQ: `<button aria-expanded aria-controls>` for each question.
- Mobile menu is a dialog: focus trapped while open, Esc closes it, focus returns to the menu button.
- Segmented period control: buttons with `aria-pressed`.
- The Pega slot is `<section aria-labelledby>` titled "Retirement Income Application (placeholder)".
- Status text is never colour only.
- Visible focus ring on every interactive element: 2px teal-700 outline, 2px offset.

## Mobile-first rules
- Build at 390px first. Unprefixed classes = phone; `md:` (768) and `lg:` (1024) add layout for bigger screens.
- No `max-width` media queries and no `max-*:` Tailwind variants.
- No horizontal scrolling from 320px to 1440px, and at 200% zoom.
- Touch targets at least 48px high (icon buttons at least 44 × 44).
- Body text at least 16px. Page gutter 16px on phones, 80px on desktop, content max 1280px.
- Phone layouts follow the "– Mobile" mockups: stacked cards, full-width buttons, accordion footer,
  member header with logo, "Retirement Manager" accent button and menu.
- Header switch points: the public header shows the desktop nav from `lg` (1024). The member header has more
  items, so it keeps the phone pattern until `xl` (1280). Below `xs` (360) the member header shows the logo mark only.

## Smooth scrolling (Lenis)
- `useSmoothScroll` starts Lenis once in `App` with `autoRaf: true` and smooth mouse-wheel scrolling.
- Turn it off when `prefers-reduced-motion: reduce` is set.
- Stop Lenis while the mobile menu is open; restart on close.
- On route change scroll to the top immediately (`lenis.scrollTo(0, { immediate: true })`).
- Skip link and in-page anchors must still work with Lenis running.
