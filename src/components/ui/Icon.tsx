import type { FC, SVGProps } from 'react'
import type { IconName } from './iconNames'

type SvgComponent = FC<SVGProps<SVGSVGElement>>

const iconFiles = import.meta.glob<SvgComponent>('../../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
})

const icons = Object.fromEntries(
  Object.entries(iconFiles).map(([path, component]) => [path.split('/').pop()!.replace('.svg', ''), component]),
) as Record<IconName, SvgComponent>

// Sizes from iconography.sizes in the style guide: 16, 20, 24, 24.
const sizeClasses = {
  inline: 'size-4',
  default: 'size-5',
  nav: 'size-6',
  tile: 'size-6',
} as const

export type IconSize = keyof typeof sizeClasses

type IconProps = {
  name: IconName
  size?: IconSize
  label?: string
  className?: string
}

export function Icon({ name, size = 'default', label, className = '' }: IconProps) {
  const Svg = icons[name]
  const accessibility = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }
  return <Svg {...accessibility} focusable="false" className={`shrink-0 ${sizeClasses[size]} ${className}`} />
}
