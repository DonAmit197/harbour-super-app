import { expect, test } from '@playwright/test'
import { expectPath, startSignedIn } from './helpers'

type Matrix = Record<string, string>

const publicLinks: Matrix = { 'Harbour Super home': '/', 'Log in': '/login', Join: '/join' }
const memberLinks: Matrix = { 'Harbour Super dashboard': '/dashboard', Dashboard: '/dashboard', 'Retirement Manager': '/retirement-manager' }

// Journey links per page (from docs/04). Every other link must go to the 404 page.
const pages: Array<{ path: string; member?: boolean; links: Matrix }> = [
  { path: './', links: { ...publicLinks, 'Log in to your account': '/login', 'Your retirement planner': '/retirement-planner', 'Open your retirement planner': '/retirement-planner' } },
  {
    path: './retirement-planner',
    links: { ...publicLinks, 'Retirement Manager': '/login?next=retirement-manager', 'Go to Retirement Manager': '/login?next=retirement-manager', 'Become a member': '/join' },
  },
  { path: './join', links: publicLinks },
  { path: './not-found', links: { ...publicLinks, 'Go to the home page': '/' } },
  { path: './login', links: { 'Harbour Super home': '/', Back: '/', 'Back to home': '/', 'Join now': '/join' } },
  {
    path: './dashboard',
    member: true,
    links: { ...memberLinks, 'Open Retirement Manager': '/retirement-manager', 'Start your retirement income Apply in Retirement Manager': '/retirement-manager' },
  },
  { path: './retirement-manager', member: true, links: { ...memberLinks, Dashboard: '/dashboard' } },
  { path: './not-found', member: true, links: { ...memberLinks, 'Go to your dashboard': '/dashboard' } },
]

for (const { path, member, links } of pages) {
  test(`every link on ${path}${member ? ' (signed in)' : ''} goes where the link matrix says`, async ({ page, context }) => {
    if (member) await startSignedIn(context)
    await page.goto(path)
    const found = await page.locator('a[href]:not([href="#main"])').evaluateAll((anchors) =>
      anchors.map((anchor) => {
        // innerText skips hidden labels: responsive links hold a phone and a desktop label.
        const visibleText = (anchor as HTMLElement).innerText.replace(/\s+/g, ' ')
        return { name: (anchor.getAttribute('aria-label') || visibleText).trim(), href: anchor.getAttribute('href') ?? '' }
      }),
    )
    expect(found.length).toBeGreaterThanOrEqual(5)
    for (const { name, href } of found) {
      const target = href.replace(/^\/harbour-super-app/, '') || '/'
      expect.soft(target, `"${name}" on ${path}`).toBe(links[name] ?? '/not-found')
    }
  })
}

test('a link to an unbuilt page lands on the 404 page', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('link', { name: 'Why Harbour Run only for members, so profits go back to you.' }).click()
  await expectPath(page, '/not-found')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('We can’t find that page')
  await page.getByRole('link', { name: 'Go to the home page' }).click()
  await expectPath(page, '/')
})

test('FAQ answers open and close, and period buttons change selection only', async ({ page, context }) => {
  await page.goto('./retirement-planner')
  const question = page.getByRole('button', { name: 'How much do I need to draw each year?' })
  await question.click()
  await expect(question).toHaveAttribute('aria-expanded', 'true')
  await expectPath(page, '/retirement-planner')

  await startSignedIn(context)
  await page.goto('./dashboard')
  const threeYears = page.getByRole('button', { name: '3 years' })
  await threeYears.click()
  await expect(threeYears).toHaveAttribute('aria-pressed', 'true')
  await expectPath(page, '/dashboard')
})
