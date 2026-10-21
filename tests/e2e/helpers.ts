import { expect, type BrowserContext, type Page, type TestInfo } from '@playwright/test'

export const sessionKey = 'harbour-super-demo-session'

export const publicRoutes = ['./', './retirement-planner', './join', './login', './not-found']
export const memberRoutes = ['./dashboard', './retirement-manager', './not-found']

export const isPhone = (testInfo: TestInfo) => testInfo.project.name === 'phone'

export function demoLogin() {
  const username = process.env.VITE_DEMO_USERNAME
  const password = process.env.VITE_DEMO_PASSWORD
  if (!username || !password) throw new Error('Set VITE_DEMO_USERNAME and VITE_DEMO_PASSWORD in .env or the environment')
  return { username, password }
}

export async function startSignedIn(context: BrowserContext) {
  await context.addInitScript((key) => sessionStorage.setItem(key, JSON.stringify({ signedIn: true })), sessionKey)
}

export async function logInThroughForm(page: Page) {
  const { username, password } = demoLogin()
  await page.getByLabel('Username').fill(username)
  await page.getByLabel('Password', { exact: true }).fill(password)
  await page.getByRole('button', { name: 'Log in', exact: true }).click()
}

export const pathOf = (page: Page) => new URL(page.url()).pathname.replace(/^\/harbour-super-app/, '') || '/'

export async function expectPath(page: Page, path: string) {
  await expect.poll(() => pathOf(page)).toBe(path)
}

// Opens the mobile menu on phones so links inside it can be used.
export async function openMenuIfPhone(page: Page, testInfo: TestInfo) {
  if (!isPhone(testInfo)) return page
  await page.getByRole('button', { name: 'Open menu' }).click()
  return page.getByRole('dialog', { name: 'Menu' })
}
