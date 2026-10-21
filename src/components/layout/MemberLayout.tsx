import { Outlet, useNavigate } from 'react-router'
import { MemberHeader } from './MemberHeader'
import { SiteFooter } from './SiteFooter'
import { SkipLink } from './SkipLink'

export function MemberLayout() {
  const navigate = useNavigate()
  const logOut = () => navigate('/')

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
