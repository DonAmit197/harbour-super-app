# 01 · Why we are building this shell

## The idea
Our organisation delivers Pega projects for government, banking and finance, health,
aviation and security clients. We now build applications with **Pega Blueprint** and
**Pega Infinity '26 AI**. This demo shows how fast that can go.

Pega Constellation is excellent for case work, but members expect a branded, friendly
website. So we build a light **React shell** that looks and feels like the fund's own site,
and we **embed** the Pega case where the real work happens. The member never feels they
have left Harbour Super.

## What Phase 1 delivers
- A public website: Home, Retirement planner, Join, Log in, 404.
- A member area behind a demo login: Dashboard and Retirement Manager.
- Retirement Manager holds a clearly labelled slot: **"Placeholder: Constellation React app"**.
  The LSA team will drop the Pega Retirement Income Application into this slot later.
- Fake, display-only data for one demo member: Margaret Chen, 64.
- Hosted on GitHub Pages for business review.

## Who it is for
Members aged around 60 and over, often on a phone, who want to start a retirement income.
Large text, clear steps and plain language matter more than visual flair.

## Future expansion (design for it, do not build it)
- **Phase 2:** embed the real Pega case (Pega Web Embed or the Constellation React SDK)
  in the Retirement Manager slot. Theme it with the same style guide JSON.
- More member requests on the same shell: bank account change, hardship withdrawal,
  lump sum withdrawal. Each becomes a new page with its own embed slot.
- Adviser and contact centre portals reusing the same components.
- Real authentication (OAuth with PKCE against Pega) replacing the demo login.
- Moving the repository from the personal GitHub account (DonAmit07) to the
  organisation's GitHub. Only the remote and the base path should need to change.

Keep the code ready for this: the embed slot is its own component, auth sits behind a
small interface, and brand values come only from the style guide JSON.
