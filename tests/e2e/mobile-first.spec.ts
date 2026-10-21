import { expect, test } from '@playwright/test'
import { isPhone, memberRoutes, publicRoutes, startSignedIn } from './helpers'

const widths = [320, 390, 768, 1024, 1440]

test('no horizontal scrolling from 320px to 1440px', async ({ page, context }) => {
  await startSignedIn(context)
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of [...publicRoutes.filter((route) => route !== './login'), ...memberRoutes]) {
      await page.goto(path)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
      expect.soft(overflow, `${path} at ${width}px`).toBe(false)
    }
  }
})

test('phone shows the menu button and hides the desktop nav; desktop is the reverse', async ({ page }, testInfo) => {
  await page.goto('./')
  const desktopNav = page.getByRole('banner').getByRole('navigation', { name: 'Main' })
  const menuButton = page.getByRole('button', { name: 'Open menu' })
  if (isPhone(testInfo)) {
    await expect(desktopNav).toBeHidden()
    await expect(menuButton).toBeVisible()
  } else {
    await expect(desktopNav).toBeVisible()
    await expect(menuButton).toBeHidden()
  }
})

test('on phones every visible control is at least 44px high and primary actions 48px', async ({ page, context }, testInfo) => {
  test.skip(!isPhone(testInfo), 'Touch target sizes apply to phones')
  for (const path of [...publicRoutes, ...memberRoutes]) {
    if (path === './dashboard') await startSignedIn(context)
    await page.goto(path)
    const small = await page.locator('a, button, input[type="checkbox"]').evaluateAll((elements) =>
      elements
        .filter((element) => element.getClientRects().length > 0 && !element.closest('.sr-only') && !element.classList.contains('sr-only'))
        .map((element) => {
          const box = (element.closest('label') ?? element).getBoundingClientRect()
          const primary = element.classList.contains('bg-teal-700') || element.classList.contains('bg-sun')
          return { text: element.textContent?.trim().slice(0, 30), height: box.height, needed: primary ? 48 : 44 }
        })
        .filter(({ height, needed }) => height < needed - 0.5),
    )
    expect(small, path).toEqual([])
  }
})

test('body text is at least 16px on phones', async ({ page }, testInfo) => {
  test.skip(!isPhone(testInfo), 'Phone check')
  for (const path of publicRoutes) {
    await page.goto(path)
    const size = await page.evaluate(() => parseFloat(getComputedStyle(document.body).fontSize))
    expect(size, path).toBeGreaterThanOrEqual(16)
  }
})
