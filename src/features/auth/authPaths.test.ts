import { loginPathFor, retirementManagerEntryPath, wantsRetirementManager } from './authPaths'

describe('authPaths', () => {
  it('builds the login path with the wanted page', () => {
    expect(loginPathFor('/retirement-manager')).toBe('/login?next=retirement-manager')
    expect(loginPathFor('/dashboard')).toBe('/login?next=dashboard')
    expect(loginPathFor('/')).toBe('/login')
  })

  it('sends planner visitors to the login page unless already signed in', () => {
    expect(retirementManagerEntryPath(false)).toBe('/login?next=retirement-manager')
    expect(retirementManagerEntryPath(true)).toBe('/retirement-manager')
  })

  it('knows when the login notice for Retirement Manager is needed', () => {
    expect(wantsRetirementManager('?next=retirement-manager')).toBe(true)
    expect(wantsRetirementManager('?next=dashboard')).toBe(false)
    expect(wantsRetirementManager('')).toBe(false)
  })
})
