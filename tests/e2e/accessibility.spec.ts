import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { memberRoutes, publicRoutes, startSignedIn } from './helpers'

const routes = [...publicRoutes.map((path) => ({ path, member: false })), ...memberRoutes.map((path) => ({ path, member: true }))]

for (const { path, member } of routes) {
  test(`${path}${member ? ' (signed in)' : ''} has no axe violations and the required structure`, async ({ page, context }) => {
    if (member) await startSignedIn(context)
    await page.goto(path)
    await expect(page.locator('h1')).toHaveCount(1)

    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
    expect(results.violations.map((violation) => `${violation.id}: ${violation.nodes.length}`)).toEqual([])

    await expect(page).toHaveTitle(/ – Harbour Super$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-AU')
    for (const landmark of ['header', 'nav', 'main#main', 'footer']) {
      expect(await page.locator(landmark).count(), landmark).toBeGreaterThan(0)
    }

    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toHaveText('Skip to main content')

    const unnamed = await page.locator('a, button, input').evaluateAll((elements) =>
      elements
        .filter((element) => element.getClientRects().length > 0)
        .filter((element) => {
          const input = element as HTMLInputElement
          const name = element.getAttribute('aria-label') || element.textContent?.trim() || input.labels?.[0]?.textContent?.trim()
          return !name
        })
        .map((element) => element.outerHTML.slice(0, 80)),
    )
    expect(unnamed).toEqual([])
  })
}

test('focus moves to the page heading after navigation and the title is announced', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('link', { name: 'Your retirement planner', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused()
  await expect(page.locator('[aria-live="polite"]')).toHaveText('Retirement planner – Harbour Super')
})

test('charts have a text summary and a data table', async ({ page, context }) => {
  await startSignedIn(context)
  await page.goto('./dashboard')
  await expect(page.getByRole('img', { name: /Line chart of your balance/ })).toBeAttached()
  await expect(page.getByRole('img', { name: /Donut chart/ })).toBeAttached()
  await expect(page.getByRole('img', { name: /Bar chart of contributions/ })).toBeAttached()
  await expect(page.locator('table')).toHaveCount(2)
  await expect(page.getByText('Up $24,516, 6.9%, over the past 12 months')).toBeAttached()
})
