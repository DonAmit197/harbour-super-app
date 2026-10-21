# 04 · Screens, routes and working links

## Routes
| Path | Page | Layout | Mockups |
|---|---|---|---|
| `/` | Home | Public | `Home – Mobile.png`, `Home – Desktop.png` |
| `/retirement-planner` | Retirement planner | Public | `Retirement planner – *.png` |
| `/join` | Join (content only) | Public | `Join – *.png` |
| `/login` | Log in | Bare (own top bar) | `Log in – *.png` |
| `/dashboard` | Member dashboard | Member, protected | `Dashboard – *.png` |
| `/retirement-manager` | Retirement Manager | Member, protected | `Retirement Manager – *.png` |
| `/not-found` and `*` | Page not found | Public | `Page not found – *.png` |

## Journeys (the only working links)
- **A, existing member:** Home → "Log in to your account" or header "Log in" → Log in → Dashboard → "Retirement Manager" → Retirement Manager.
- **B, planning:** Home → "Your retirement planner" or "Open your retirement planner" → Planner → "Retirement Manager" or "Go to Retirement Manager" → Log in (shows notice "Log in to continue to Retirement Manager.") → Dashboard → Retirement Manager.
- **C, not a member:** Planner "Become a member" or header "Join" → Join.

## Link matrix
| Page | Working links → destination |
|---|---|
| All public pages | Logo → `/`; header Log in → `/login`; header Join → `/join` |
| Home | Log in to your account → `/login`; Your retirement planner, Open your retirement planner → `/retirement-planner` |
| Planner | Retirement Manager, Go to Retirement Manager → `/login?next=retirement-manager` (or `/retirement-manager` if already logged in); Become a member → `/join` |
| Log in | Log in → `/dashboard`; Back / Back to home → `/`; Join now → `/join` |
| Member pages | Logo → `/dashboard`; Dashboard nav → `/dashboard`; Retirement Manager (header, banner, quick action "Start your retirement income") → `/retirement-manager`; Log out (profile menu) → `/` |
| Retirement Manager | Breadcrumb / Back "Dashboard" → `/dashboard` |
| 404 | Signed out: public header, Go to the home page → `/`, Log in → `/login`. Signed in: member header, Go to your dashboard → `/dashboard` (no Log in button) |

Every other link, nav item, card, tile, footer link and FAQ "read more" uses `FutureLink` → `/not-found`.
FAQ accordions open and close (they are not links). Period buttons (1Y, 3Y, 5Y, All) change the selected state only.

## Agreed changes from the mockups
1. **Retirement Manager:** the dashed slot shows only "Placeholder: Constellation React app" with one line of
   explanation. Do not build the Welcome step from the mockup. Keep the title, breadcrumb and side panel ("Need help?",
   "What you'll need"). Render it with `features/pega/ConstellationPlaceholder` containing `<div id="pega-constellation-root">`.
2. **Retirement Manager header:** hide the "Retirement Manager" button on this page (desktop and mobile).
3. **Log in:** first field label is "Username" with helper "Use the demo username shared with you." Fields start empty.
   Demo notice: "Demo prototype: use the demo username and password shared with you." Never print the credentials on screen.
4. **Home hero:** desktop uses `hero.jpg` as a full-bleed background (copy column 560px on the left over the soft area, height 720px);
   mobile shows the photo below the buttons, rounded 24px, cropped to the couple (`object-position: right`).
5. **Log in desktop:** right panel uses `login.jpg`.
6. **Copy:** use the mockup text word for word. Sentence case, no exclamation marks.
7. **Member nav:** the first item is "Dashboard", not "Home", so members never confuse it with the public home page.
8. **404 while signed in:** the page uses the member layout and its main button goes to the dashboard.

## Runtime assets (copy in Task 3, rename without spaces)
- `assets/images/Logo/Full.svg` → `public/brand/logo.svg`; `Full reverse.svg` → `logo-reverse.svg`; `Mark.svg` → `mark.svg`
- Favicon: `Mark.png` → `public/brand/favicon.png` until the user supplies a final favicon
- Photos are compressed with `sharp` (`scripts/optimise-images.mjs`): `Hero.jpg` → `public/images/hero.jpg` (1920w)
  and `hero-mobile.jpg` (960w, for phones); `Login-desktop.png` → `public/images/login.jpg` (720w)
- `login.jpg` has the headline "Guiding you to a brighter tomorrow." baked in, so its alt text must include that line
- `assets/icons/Icon/*.svg` → `src/assets/icons/` with stroke colour replaced by `currentColor`
- Mocks and PDFs are never shipped.
