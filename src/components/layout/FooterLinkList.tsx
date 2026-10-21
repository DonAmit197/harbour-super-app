import type { NavItem } from '../../content/navigation'
import { AppLink } from '../ui/AppLink'

type FooterLinkListProps = { links: NavItem[] }

export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className="flex flex-col md:gap-1">
      {links.map((link) => (
        <li key={link.label}>
          <AppLink to={link.to} className="inline-flex min-h-11 items-center text-body-m text-white hover:underline md:min-h-8 md:text-body-s">
            {link.label}
          </AppLink>
        </li>
      ))}
    </ul>
  )
}
