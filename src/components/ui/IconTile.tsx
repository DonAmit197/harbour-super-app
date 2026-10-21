import { classNames } from '../../lib/classNames'
import { Icon } from './Icon'
import type { IconName } from './iconNames'

export type IconTileSize = 'small' | 'medium' | 'large' | 'xlarge'
export type IconTileTone = 'lagoon' | 'sun'

type IconTileProps = {
  icon: IconName
  size?: IconTileSize
  tone?: IconTileTone
  className?: string
}

// Tile sizes 36, 44, 48 and 64 from iconography.tile in the style guide.
const sizeClasses: Record<IconTileSize, string> = {
  small: 'size-9 rounded-input',
  medium: 'size-11 rounded-input',
  large: 'size-12 rounded-tile',
  xlarge: 'size-16 rounded-tile',
}

const toneClasses: Record<IconTileTone, string> = {
  lagoon: 'bg-lagoon-50 text-teal-700',
  sun: 'bg-sun text-navy',
}

export function IconTile({ icon, size = 'medium', tone = 'lagoon', className }: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={classNames('inline-flex shrink-0 items-center justify-center', sizeClasses[size], toneClasses[tone], className)}
    >
      <Icon name={icon} size={size === 'xlarge' ? 'tile' : 'default'} />
    </span>
  )
}
