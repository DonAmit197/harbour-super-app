import { expect, test } from '@playwright/test'
import { expectPath, isPhone, logInThroughForm, openMenuIfPhone } from './helpers'

test('journey A: existing member logs in from home and opens Retirement Manager', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('link', { name: 'Log in to your account' }).click()
  await expectPath(page, '/login')
  await logInThroughForm(page)
  await expectPath(page, '/dashboard')
  await expect(page.getByRole('heading', { level: 1, name: 'Good morning, Margaret' })).toBeVisible()

  await page.getByRole('banner').getByRole('link', { name: 'Retirement Manager' }).click()
  await expectPath(page, '/retirement-manager')
  await expect(page.getByRole('region', { name: 'Retirement Income Application' })).toBeVisible()
  await expect(page.locator('#pega-constellation-root')).toBeVisible()
  await expect(page.getByRole('banner').getByRole('link', { name: 'Retirement Manager' })).toHaveCount(0)
})

test('journey A: header Log in also reaches the login page', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('banner').getByRole('link', { name: 'Log in', exact: true }).first().click()
  await expectPath(page, '/login')
})

test('journey B: planner sends the member through log in with a notice', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('link', { name: 'Your retirement planner', exact: true }).click()
  await expectPath(page, '/retirement-planner')
  await page.getByRole('link', { name: 'Go to Retirement Manager' }).click()
  await expectPath(page, '/login')
  await expect(page.getByText('Log in to continue to Retirement Manager.')).toBeVisible()
  await logInThroughForm(page)
  await expectPath(page, '/dashboard')
  await page.getByRole('link', { name: 'Open Retirement Manager' }).click()
  await expectPath(page, '/retirement-manager')
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Dashboard' }).click()
  await expectPath(page, '/dashboard')
})

test('journey B: signed-in planner visitors go straight to Retirement Manager', async ({ page }) => {
  await page.goto('./login')
  await logInThroughForm(page)
  await expectPath(page, '/dashboard')
  await page.goto('./retirement-planner')
  await page.getByRole('link', { name: 'Retirement Manager', exact: true }).first().click()
  await expectPath(page, '/retirement-manager')
})

test('journey C: not a member goes to Join from the planner and the header', async ({ page }, testInfo) => {
  await page.goto('./retirement-planner')
  await page.getByRole('link', { name: 'Become a member' }).click()
  await expectPath(page, '/join')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Join a fund that’s run for members')

  await page.goto('./')
  const menu = await openMenuIfPhone(page, testInfo)
  await menu.getByRole('link', { name: 'Join', exact: true }).click()
  await expectPath(page, '/join')
})

test('log out returns to the home page and protects member pages again', async ({ page }, testInfo) => {
  await page.goto('./login')
  await logInThroughForm(page)
  await expectPath(page, '/dashboard')
  if (isPhone(testInfo)) {
    const menu = await openMenuIfPhone(page, testInfo)
    await menu.getByRole('button', { name: 'Log out' }).click()
  } else {
    await page.getByRole('button', { name: /Account menu for/ }).click()
    await page.getByRole('button', { name: 'Log out' }).click()
  }
  await expectPath(page, '/')
  await page.goto('./dashboard')
  await expectPath(page, '/login')
})

test('a signed-in member who reaches the 404 page stays in the member area', async ({ page }) => {
  await page.goto('./login')
  await logInThroughForm(page)
  await expectPath(page, '/dashboard')
  await page.getByRole('link', { name: /Combine your super/ }).click()
  await expectPath(page, '/not-found')
  await expect(page.getByRole('banner').getByRole('link', { name: 'Harbour Super dashboard' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Log in', exact: true })).toHaveCount(0)
  await page.getByRole('link', { name: 'Go to your dashboard' }).click()
  await expectPath(page, '/dashboard')
})
