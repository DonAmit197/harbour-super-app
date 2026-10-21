import type { NavItem } from '../../content/navigation'
import { AppLink } from '../ui/AppLink'
import { Icon } from '../ui/Icon'

type MobileNavListProps = { label: string; items: NavItem[] }

export function MobileNavList({ label, items }: MobileNavListProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.label} className="border-b border-line">
            <AppLink
              to={item.to}
              className="flex min-h-14 items-center justify-between gap-4 font-heading text-h4 text-navy"
              activeClassName="text-teal-700"
            >
              <span>{item.label}</span>
              <Icon name="chevron-right" className="text-slate" />
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
