import type { Ref } from 'react'
import { headerLabels } from '../../content/navigation'
import { classNames } from '../../lib/classNames'
import { Icon } from '../ui/Icon'
import { hideFrom, type DesktopBreakpoint } from './breakpointClasses'

type MenuButtonProps = {
  expanded: boolean
  onClick: () => void
  desktopFrom?: DesktopBreakpoint
  ref?: Ref<HTMLButtonElement>
}

export function MenuButton({ expanded, onClick, desktopFrom = 'lg', ref }: MenuButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={headerLabels.openMenu}
      aria-haspopup="dialog"
      aria-expanded={expanded}
      onClick={onClick}
      className={classNames(
        '-mr-2 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-pill text-ink hover:bg-mist',
        hideFrom[desktopFrom],
      )}
    >
      <Icon name="menu" size="nav" />
    </button>
  )
}
