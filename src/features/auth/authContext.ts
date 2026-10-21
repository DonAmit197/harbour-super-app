import { createContext, useContext } from 'react'

// Small on purpose so OAuth with Pega can replace the demo login later.
export type AuthState = {
  signedIn: boolean
  // True after the member chose Log out, so protected pages send them home, not to the login page.
  loggedOut: boolean
  logIn: (username: string, password: string) => boolean
  logOut: () => void
}

export const AuthContext = createContext<AuthState | null>(null)

export function useAuth() {
  const auth = useContext(AuthContext)
  if (!auth) throw new Error('useAuth must be used inside AuthProvider')
  return auth
}
