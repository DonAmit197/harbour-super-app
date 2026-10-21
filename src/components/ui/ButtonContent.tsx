import type { ReactNode } from 'react'
import { Icon } from './Icon'
import type { ButtonSize } from './buttonStyles'

type ButtonContentProps = {
  children: ReactNode
  size?: ButtonSize
  withArrow?: boolean
}

export function ButtonContent({ children, size = 'large', withArrow = false }: ButtonContentProps) {
  return (
    <>
      <span>{children}</span>
      {withArrow && <Icon name="arrow-right" size={size === 'large' ? 'default' : 'inline'} />}
    </>
  )
}
