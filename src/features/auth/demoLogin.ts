export type DemoLogin = { username?: string; password?: string }

function configuredLogin(): DemoLogin {
  return { username: import.meta.env.VITE_DEMO_USERNAME, password: import.meta.env.VITE_DEMO_PASSWORD }
}

// Username: trimmed and case-insensitive. Password: exact match.
export function checkDemoCredentials(username: string, password: string, expected = configuredLogin()) {
  if (!expected.username || !expected.password) return false
  return username.trim().toLowerCase() === expected.username.trim().toLowerCase() && password === expected.password
}
