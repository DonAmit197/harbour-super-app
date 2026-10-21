import type { ReactNode } from 'react'
import { Navigate } from 'react-router'
import { useAuth } from './authContext'
import { dashboardPath } from './authPaths'

type RedirectIfSignedInProps = { children: ReactNode }

// Visiting the login page while signed in goes to the dashboard.
export function RedirectIfSignedIn({ children }: RedirectIfSignedInProps) {
  const { signedIn } = useAuth()
  if (signedIn) return <Navigate to={dashboardPath} replace />
  return children
}
