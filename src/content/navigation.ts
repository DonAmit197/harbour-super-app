// A link without `to` is not built yet and goes to the 404 page.
export type NavItem = { label: string; to?: string }
export type LinkGroup = { title: string; links: NavItem[] }

export const publicNav: NavItem[] = [
  { label: 'Why Harbour' },
  { label: 'What we offer' },
  { label: 'Your super' },
  { label: 'Your retirement' },
  { label: 'Help and support' },
]

export const memberNav: NavItem[] = [
  { label: 'Home', to: '/dashboard' },
  { label: 'My super' },
  { label: 'Investments' },
  { label: 'Insurance' },
  { label: 'Documents' },
]

export const footerColumns: LinkGroup[] = [
  {
    title: 'Harbour Super',
    links: [{ label: 'Why Harbour' }, { label: 'How we invest' }, { label: 'Fees and costs' }, { label: 'Careers' }],
  },
  {
    title: 'Members',
    links: [{ label: 'Your super' }, { label: 'Your retirement' }, { label: 'Insurance' }, { label: 'Forms and documents' }],
  },
  {
    title: 'Support',
    links: [{ label: 'Help centre' }, { label: 'Contact us' }, { label: 'Make a complaint' }, { label: 'Accessibility' }],
  },
]

export const legalLinks: NavItem[] = [{ label: 'Privacy' }, { label: 'Terms of use' }, { label: 'Accessibility' }]

export const headerLabels = {
  mainNav: 'Main',
  memberNav: 'Member',
  publicHome: 'Harbour Super home',
  memberHome: 'Harbour Super dashboard',
  logIn: 'Log in',
  join: 'Join',
  search: 'Search',
  notifications: 'Notifications',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  menuTitle: 'Menu',
  retirementManager: 'Retirement Manager',
  logOut: 'Log out',
  yourProfile: 'Your profile',
  accountMenu: 'Account menu for',
}
