import { classNames } from '../../lib/classNames'

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'onDark' | 'text'
export type ButtonSize = 'large' | 'small'

export type ButtonStyleProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-teal-700 text-white hover:bg-teal-900 active:bg-teal-900',
  secondary: 'border-strong border-teal-700 bg-white text-teal-700 hover:bg-lagoon-50',
  accent: 'bg-sun text-navy hover:brightness-95 active:brightness-90',
  onDark: 'bg-white text-navy hover:bg-lagoon-50',
  text: 'bg-transparent text-teal-700 underline-offset-4 hover:underline',
}

// Small is 44px high, not 38px, to meet the minimum touch target.
const sizeClasses: Record<ButtonSize, string> = {
  large: 'min-h-12 px-6 py-3.5 text-button',
  small: 'min-h-11 px-4 py-2 text-body-s-strong whitespace-nowrap',
}

export function buttonClassName({ variant = 'primary', size = 'large', fullWidth = false }: ButtonStyleProps) {
  return classNames(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill text-center transition-colors',
    variantClasses[variant],
    variant === 'text' ? classNames('px-1', size === 'large' ? 'min-h-12 text-button' : 'min-h-11 text-body-s-strong') : sizeClasses[size],
    fullWidth && 'w-full',
  )
}
