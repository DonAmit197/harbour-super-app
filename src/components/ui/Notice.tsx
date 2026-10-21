import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'
import { Icon } from './Icon'
import type { IconName } from './iconNames'

export type NoticeVariant = 'info' | 'warning' | 'demo'

type NoticeProps = {
  variant?: NoticeVariant
  title?: string
  titleLevel?: 'h2' | 'h3'
  // Use "status" for notices that appear after the page loads, so screen readers announce them.
  role?: 'status' | 'alert'
  children: ReactNode
  className?: string
}

const variantStyles: Record<NoticeVariant, { classes: string; icon: IconName }> = {
  info: { classes: 'rounded-input bg-lagoon-50 px-4 py-3 text-teal-900', icon: 'info' },
  warning: { classes: 'rounded-card border-strong border-sun bg-sun-50 p-5 text-navy md:p-6', icon: 'alert' },
  demo: { classes: 'rounded-input bg-sun-50 px-4 py-3 text-navy', icon: 'info' },
}

export function Notice({ variant = 'info', title, titleLevel: Heading = 'h3', role, children, className }: NoticeProps) {
  const { classes, icon } = variantStyles[variant]
  return (
    <div role={role} className={classNames('flex items-start gap-3', classes, className)}>
      <Icon name={icon} size={title ? 'nav' : 'default'} className="mt-0.5" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {title && <Heading className="text-h4 text-navy">{title}</Heading>}
        <div className={title ? 'flex flex-col gap-4 text-body-m' : 'text-body-m'}>{children}</div>
      </div>
    </div>
  )
}
