import { expect, test } from '@playwright/test'
import { demoLogin, expectPath, startSignedIn } from './helpers'

test('protected routes send signed-out visitors to log in with next', async ({ page }) => {
  for (const [path, next] of [['./dashboard', 'dashboard'], ['./retirement-manager', 'retirement-manager']]) {
    await page.goto(path)
    await expectPath(page, '/login')
    expect(new URL(page.url()).searchParams.get('next')).toBe(next)
  }
})

test('empty fields show field errors and focus the first one', async ({ page }) => {
  await page.goto('./login')
  await expect(page.getByLabel('Username')).toHaveValue('')
  await expect(page.getByLabel('Password', { exact: true })).toHaveValue('')
  await page.getByRole('button', { name: 'Log in', exact: true }).click()
  await expect(page.getByLabel('Username')).toBeFocused()
  await expect(page.getByLabel('Username')).toHaveAttribute('aria-invalid', 'true')
  await expect(page.getByText('Enter your username.')).toBeVisible()
  await expect(page.getByText('Enter your password.')).toBeVisible()
})

test('a wrong password shows the alert and moves focus to it', async ({ page }) => {
  await page.goto('./login')
  await page.getByLabel('Username').fill(demoLogin().username)
  await page.getByLabel('Password', { exact: true }).fill('not-the-password')
  await page.getByRole('button', { name: 'Log in', exact: true }).click()
  const alert = page.getByRole('alert')
  await expect(alert).toHaveText('The username or password is not right. Check them and try again.')
  await expect(alert).toBeFocused()
  await expectPath(page, '/login')
})

test('show password toggles the field and reports its state', async ({ page }) => {
  await page.goto('./login')
  const toggle = page.getByRole('button', { name: 'Show password' })
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByLabel('Password', { exact: true })).toHaveAttribute('type', 'text')
})

test('the login page sends signed-in members to the dashboard', async ({ page, context }) => {
  await startSignedIn(context)
  await page.goto('./login')
  await expectPath(page, '/dashboard')
})

test('the demo credentials are never printed on screen', async ({ page }) => {
  await page.goto('./login')
  const { username, password } = demoLogin()
  const text = await page.locator('body').innerText()
  expect(text).not.toContain(username)
  expect(text).not.toContain(password)
})
