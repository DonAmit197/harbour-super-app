import { checkDemoCredentials } from './demoLogin'

const expected = { username: 'demo_user', password: 'Secret@123' }

describe('checkDemoCredentials', () => {
  it('accepts the right username and password', () => {
    expect(checkDemoCredentials('demo_user', 'Secret@123', expected)).toBe(true)
  })

  it('rejects a wrong username or password', () => {
    expect(checkDemoCredentials('someone_else', 'Secret@123', expected)).toBe(false)
    expect(checkDemoCredentials('demo_user', 'wrong', expected)).toBe(false)
  })

  it('rejects empty fields', () => {
    expect(checkDemoCredentials('', '', expected)).toBe(false)
    expect(checkDemoCredentials('demo_user', '', expected)).toBe(false)
    expect(checkDemoCredentials('', 'Secret@123', expected)).toBe(false)
  })

  it('ignores extra spaces and letter case in the username only', () => {
    expect(checkDemoCredentials('  Demo_User  ', 'Secret@123', expected)).toBe(true)
    expect(checkDemoCredentials('demo_user', ' Secret@123', expected)).toBe(false)
    expect(checkDemoCredentials('demo_user', 'secret@123', expected)).toBe(false)
  })

  it('never accepts anything when the demo login is not configured', () => {
    expect(checkDemoCredentials('', '', {})).toBe(false)
    expect(checkDemoCredentials('anyone', 'anything', { username: '', password: '' })).toBe(false)
  })
})
