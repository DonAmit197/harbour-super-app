import { Outlet } from 'react-router'
import { useAuth } from '../../features/auth/authContext'
import { MemberHeader } from './MemberHeader'
import { SiteFooter } from './SiteFooter'
import { SkipLink } from './SkipLink'

export function MemberLayout() {
  const { logOut } = useAuth()

  return (
    <div className="flex min-h-dvh flex-col bg-mist">
      <SkipLink />
      <MemberHeader onLogOut={logOut} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
