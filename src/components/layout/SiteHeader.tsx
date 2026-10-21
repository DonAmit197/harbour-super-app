import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { headerLabels, publicNav } from '../../content/navigation'
import { ButtonLink } from '../ui/ButtonLink'
import { FutureLink } from '../ui/FutureLink'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { DesktopNav } from './DesktopNav'
import { MenuButton } from './MenuButton'
import { MobileMenu } from './MobileMenu'
import { MobileNavList } from './MobileNavList'
import { PageContainer } from './PageContainer'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <PageContainer className="flex h-16 items-center gap-6 lg:h-20 xl:gap-10">
        <Link to="/" aria-label={headerLabels.publicHome} className="inline-flex min-h-11 shrink-0 items-center">
          <Logo alt="" className="w-36 lg:w-44" />
        </Link>
        <DesktopNav label={headerLabels.mainNav} items={publicNav} />
        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          <span className="hidden lg:block">
            <FutureLink
              aria-label={headerLabels.search}
              className="flex size-11 items-center justify-center rounded-pill text-ink hover:bg-mist"
            >
              <Icon name="search" size="nav" />
            </FutureLink>
          </span>
          <ButtonLink to="/login" variant="secondary" size="small">
            {headerLabels.logIn}
          </ButtonLink>
          <span className="hidden lg:block">
            <ButtonLink to="/join" size="small">
              {headerLabels.join}
            </ButtonLink>
          </span>
          <MenuButton ref={menuButtonRef} expanded={menuOpen} onClick={() => setMenuOpen(true)} />
        </div>
      </PageContainer>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} returnFocusRef={menuButtonRef}>
        <MobileNavList label={headerLabels.mainNav} items={publicNav} />
        <div className="flex flex-col gap-3">
          <ButtonLink to="/login" variant="secondary" fullWidth>
            {headerLabels.logIn}
          </ButtonLink>
          <ButtonLink to="/join" fullWidth>
            {headerLabels.join}
          </ButtonLink>
          <ButtonLink variant="text">{headerLabels.search}</ButtonLink>
        </div>
      </MobileMenu>
    </header>
  )
}
