import { defineConfig, devices } from '@playwright/test'
import { loadEnv } from 'vite'

// The demo login comes from .env (or CI variables), never from the test files.
const env = loadEnv('production', process.cwd(), 'VITE_')
process.env.VITE_DEMO_USERNAME ??= env.VITE_DEMO_USERNAME
process.env.VITE_DEMO_PASSWORD ??= env.VITE_DEMO_PASSWORD

const baseURL = process.env.BASE_URL ?? 'http://localhost:4173/harbour-super-app/'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  use: { baseURL, trace: 'on-first-retry' },
  projects: [
    {
      name: 'phone',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: devices['iPhone 13'].userAgent,
      },
    },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: 'npm run build && npm run preview', url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120000 },
})
