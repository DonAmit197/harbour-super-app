import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { AuthContext } from './authContext'
import { readSignedIn, writeSignedIn } from './authSession'
import { checkDemoCredentials } from './demoLogin'

type AuthProviderProps = { children: ReactNode }

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState(() => ({ signedIn: readSignedIn(), loggedOut: false }))

  const logIn = useCallback((username: string, password: string) => {
    const valid = checkDemoCredentials(username, password)
    if (valid) {
      writeSignedIn(true)
      setSession({ signedIn: true, loggedOut: false })
    }
    return valid
  }, [])

  const logOut = useCallback(() => {
    writeSignedIn(false)
    setSession({ signedIn: false, loggedOut: true })
  }, [])

  const value = useMemo(() => ({ ...session, logIn, logOut }), [session, logIn, logOut])
  return <AuthContext value={value}>{children}</AuthContext>
}
