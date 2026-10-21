import type { ReactNode } from 'react'
import { NavLink } from 'react-router'
import { classNames } from '../../lib/classNames'
import { FutureLink } from './FutureLink'

type AppLinkProps = {
  // Leave out for destinations that are not built yet.
  to?: string
  children: ReactNode
  className?: string
  activeClassName?: string
  'aria-label'?: string
}

// NavLink sets aria-current="page" on the active link.
export function AppLink({ to, children, className, activeClassName, 'aria-label': ariaLabel }: AppLinkProps) {
  if (!to) {
    return (
      <FutureLink className={className} aria-label={ariaLabel}>
        {children}
      </FutureLink>
    )
  }
  return (
    <NavLink to={to} end aria-label={ariaLabel} className={({ isActive }) => classNames(className, isActive && activeClassName)}>
      {children}
    </NavLink>
  )
}
