import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { classNames } from '../../lib/classNames'
import { ButtonContent } from './ButtonContent'
import { buttonClassName, type ButtonStyleProps } from './buttonStyles'
import { notFoundPath } from './FutureLink'

type ButtonLinkProps = ButtonStyleProps & {
  // Leave out for destinations that are not built yet; the link then goes to the 404 page.
  to?: string
  withArrow?: boolean
  className?: string
  children: ReactNode
}

export function ButtonLink({ to = notFoundPath, variant, size, fullWidth, withArrow, className, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={classNames(buttonClassName({ variant, size, fullWidth }), className)}>
      <ButtonContent size={size} withArrow={withArrow}>
        {children}
      </ButtonContent>
    </Link>
  )
}
