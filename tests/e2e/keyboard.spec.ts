import { expect, test } from '@playwright/test'
import { isPhone, memberRoutes, publicRoutes, startSignedIn } from './helpers'

test('Tab reaches every control in order and each one shows a focus ring', async ({ page, context }) => {
  await startSignedIn(context)
  for (const path of [...publicRoutes.filter((route) => route !== './login'), ...memberRoutes]) {
    await page.goto(path)
    const total = await page.locator('a[href], button, input').evaluateAll(
      (elements) => elements.filter((element) => element.getClientRects().length > 0 && !element.closest('[hidden]')).length,
    )
    const seen = new Set<string>()
    for (let step = 0; step < total + 5; step++) {
      await page.keyboard.press('Tab')
      const focus = await page.evaluate(() => {
        const element = document.activeElement as HTMLElement
        const style = getComputedStyle(element)
        return { id: element.outerHTML.slice(0, 120), outline: style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) >= 2 }
      })
      if (focus.id.startsWith('<body')) break
      expect.soft(focus.outline, `focus ring on ${focus.id} (${path})`).toBe(true)
      seen.add(focus.id)
    }
    expect(seen.size, path).toBeGreaterThan(5)
  }
})

test('the mobile menu traps focus, closes on Esc and returns focus to the menu button', async ({ page }, testInfo) => {
  test.skip(!isPhone(testInfo), 'The menu button only shows on phones')
  await page.goto('./')
  const menuButton = page.getByRole('button', { name: 'Open menu' })
  await menuButton.click()
  const menu = page.getByRole('dialog', { name: 'Menu' })
  await expect(menu).toBeVisible()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')

  for (let step = 0; step < 20; step++) {
    await page.keyboard.press(step % 5 === 4 ? 'Shift+Tab' : 'Tab')
    expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBe(true)
  }

  await page.keyboard.press('Escape')
  await expect(menu).toBeHidden()
  await expect(menuButton).toBeFocused()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
})

test('the skip link moves focus to the main content', async ({ page }) => {
  await page.goto('./retirement-planner')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')
  await expect(page.locator('main#main')).toBeFocused()
})
