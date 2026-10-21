import type { ReactNode } from 'react'
import { Card } from '../ui/Card'
import { IconTile } from '../ui/IconTile'
import type { IconName } from '../ui/iconNames'

export type Feature = { icon: IconName; title: string; text: string }

type FeatureCardProps = Feature & { action?: ReactNode; className?: string }

export function FeatureCard({ icon, title, text, action, className }: FeatureCardProps) {
  return (
    <Card as="li" className={className}>
      <IconTile icon={icon} size="large" />
      <div className="flex flex-col gap-2">
        <h3 className="text-h4">{title}</h3>
        <p className="text-body-m text-slate">{text}</p>
      </div>
      {action && <div className="mt-auto">{action}</div>}
    </Card>
  )
}
