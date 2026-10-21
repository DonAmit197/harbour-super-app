import type { ButtonHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'
import { ButtonContent } from './ButtonContent'
import { buttonClassName, type ButtonStyleProps } from './buttonStyles'

type ButtonProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    withArrow?: boolean
  }

export function Button({
  variant,
  size,
  fullWidth,
  withArrow,
  type = 'button',
  className,
  children,
  ...buttonAttributes
}: ButtonProps) {
  return (
    <button type={type} className={classNames(buttonClassName({ variant, size, fullWidth }), className)} {...buttonAttributes}>
      <ButtonContent size={size} withArrow={withArrow}>
        {children}
      </ButtonContent>
    </button>
  )
}
