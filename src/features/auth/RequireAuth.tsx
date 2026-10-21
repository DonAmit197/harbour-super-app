import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from './authContext'
import { loginPathFor } from './authPaths'

// Wraps member routes. Signed-out visitors go to the login page, keeping the wanted page in ?next=.
// A member who has just logged out goes to the home page instead.
export function RequireAuth() {
  const { signedIn, loggedOut } = useAuth()
  const { pathname } = useLocation()
  if (!signedIn) return <Navigate to={loggedOut ? '/' : loginPathFor(pathname)} replace />
  return <Outlet />
}
