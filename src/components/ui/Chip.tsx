import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'
import { Icon } from './Icon'
import type { IconName } from './iconNames'
import { VisuallyHidden } from './VisuallyHidden'

export type ChipTone = 'positive' | 'info' | 'neutral'

type ChipProps = {
  tone?: ChipTone
  icon?: IconName
  // Spoken instead of the visible text when the visible text relies on symbols, e.g. "+$24,516".
  accessibleText?: string
  children: ReactNode
}

const toneClasses: Record<ChipTone, string> = {
  positive: 'bg-positive-bg text-positive',
  info: 'bg-lagoon-50 text-teal-900',
  neutral: 'bg-mist text-slate',
}

export function Chip({ tone = 'neutral', icon, accessibleText, children }: ChipProps) {
  return (
    <span className={classNames('inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-body-s-strong', toneClasses[tone])}>
      {icon && <Icon name={icon} size="inline" />}
      {accessibleText ? (
        <>
          <span aria-hidden="true">{children}</span>
          <VisuallyHidden>{accessibleText}</VisuallyHidden>
        </>
      ) : (
        children
      )}
    </span>
  )
}
