import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { headerLabels, memberNav } from '../../content/navigation'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { DesktopNav } from './DesktopNav'
import { MemberHeaderActions, retirementManagerPath } from './MemberHeaderActions'
import { MenuButton } from './MenuButton'
import { MobileMenu } from './MobileMenu'
import { MobileNavList } from './MobileNavList'
import { PageContainer } from './PageContainer'

const mobileMenuItems = [...memberNav, { label: headerLabels.notifications }, { label: headerLabels.yourProfile }]

type MemberHeaderProps = { onLogOut: () => void }

export function MemberHeader({ onLogOut }: MemberHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  // The breadcrumb and title already show where the member is on this page.
  const showRetirementManager = useLocation().pathname !== retirementManagerPath

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <PageContainer className="flex h-16 items-center gap-3 xs:gap-6 lg:h-20 xl:gap-10">
        <Link to="/dashboard" aria-label={headerLabels.memberHome} className="inline-flex min-h-11 shrink-0 items-center">
          <Logo variant="mark" alt="" className="w-12 xs:hidden" />
          <Logo alt="" className="hidden w-32 xs:block lg:w-44" />
        </Link>
        <DesktopNav label={headerLabels.memberNav} items={memberNav} showActiveBar from="xl" />
        <div className="ml-auto flex items-center gap-2 xl:gap-4">
          <MemberHeaderActions showRetirementManager={showRetirementManager} onLogOut={onLogOut} />
          <MenuButton ref={menuButtonRef} expanded={menuOpen} onClick={() => setMenuOpen(true)} desktopFrom="xl" />
        </div>
      </PageContainer>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} returnFocusRef={menuButtonRef}>
        <MobileNavList label={headerLabels.memberNav} items={mobileMenuItems} />
        <Button variant="secondary" fullWidth onClick={onLogOut}>
          {headerLabels.logOut}
        </Button>
      </MobileMenu>
    </header>
  )
}
