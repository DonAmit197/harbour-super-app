export const loginPath = '/login'
export const dashboardPath = '/dashboard'
export const retirementManagerPath = '/retirement-manager'
export const nextParam = 'next'

// "/retirement-manager" → "/login?next=retirement-manager"
export function loginPathFor(wantedPath: string) {
  const next = wantedPath.replace(/^\/+/, '')
  return next ? `${loginPath}?${nextParam}=${encodeURIComponent(next)}` : loginPath
}

// Planner buttons go straight to Retirement Manager when already logged in.
export function retirementManagerEntryPath(signedIn: boolean) {
  return signedIn ? retirementManagerPath : loginPathFor(retirementManagerPath)
}

export function wantsRetirementManager(search: string) {
  return new URLSearchParams(search).get(nextParam) === retirementManagerPath.slice(1)
}
