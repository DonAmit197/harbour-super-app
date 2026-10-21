import type { NavItem } from '../../content/navigation'
import { classNames } from '../../lib/classNames'
import { AppLink } from '../ui/AppLink'
import { showFrom, type DesktopBreakpoint } from './breakpointClasses'

type DesktopNavProps = {
  label: string
  items: NavItem[]
  // Member nav marks the active item with a 3px teal bar.
  showActiveBar?: boolean
  from?: DesktopBreakpoint
}

export function DesktopNav({ label, items, showActiveBar = false, from = 'lg' }: DesktopNavProps) {
  return (
    <nav aria-label={label} className={classNames('h-full', showFrom[from])}>
      <ul className={classNames('flex h-full items-center', showActiveBar ? 'gap-7' : 'gap-6 xl:gap-8')}>
        {items.map((item) => (
          <li key={item.label} className="flex h-full items-center">
            <AppLink
              to={item.to}
              className={classNames(
                'flex items-center text-body-s-strong text-ink hover:text-teal-700',
                showActiveBar ? 'h-full border-y-3 border-transparent' : 'min-h-11',
              )}
              activeClassName={showActiveBar ? 'border-b-teal-700 text-teal-700' : 'text-teal-700'}
            >
              {item.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
