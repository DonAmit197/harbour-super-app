import { headerLabels } from '../../content/navigation'
import { ButtonLink } from '../ui/ButtonLink'
import { FutureLink } from '../ui/FutureLink'
import { Icon } from '../ui/Icon'
import { retirementManagerPath } from '../../features/auth/authPaths'
import { ProfileMenu } from './ProfileMenu'


type MemberHeaderActionsProps = { showRetirementManager: boolean; onLogOut: () => void }

// Phones and tablets get the button without an arrow; desktop (xl) adds the arrow, bell and profile menu.
export function MemberHeaderActions({ showRetirementManager, onLogOut }: MemberHeaderActionsProps) {
  return (
    <>
      {showRetirementManager && (
        <>
          <span className="xl:hidden">
            <ButtonLink to={retirementManagerPath} variant="accent" size="small">
              {headerLabels.retirementManager}
            </ButtonLink>
          </span>
          <span className="hidden xl:block">
            <ButtonLink to={retirementManagerPath} variant="accent" size="small" withArrow>
              {headerLabels.retirementManager}
            </ButtonLink>
          </span>
        </>
      )}
      <span className="hidden xl:block">
        <FutureLink
          aria-label={headerLabels.notifications}
          className="flex size-11 items-center justify-center rounded-pill text-ink hover:bg-mist"
        >
          <Icon name="bell" size="nav" />
        </FutureLink>
      </span>
      <ProfileMenu onLogOut={onLogOut} />
    </>
  )
}
