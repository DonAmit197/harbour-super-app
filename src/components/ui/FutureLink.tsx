import type { ReactNode } from 'react'
import { Link } from 'react-router'

export const notFoundPath = '/not-found'

type FutureLinkProps = {
  children: ReactNode
  className?: string
  'aria-label'?: string
}

// A destination that is not built yet. Looks like any other link and goes to the 404 page.
export function FutureLink({ children, className, 'aria-label': ariaLabel }: FutureLinkProps) {
  return (
    <Link to={notFoundPath} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
