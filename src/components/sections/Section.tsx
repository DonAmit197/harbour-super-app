import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'
import { PageContainer } from '../layout/PageContainer'

export type SectionTone = 'white' | 'mist' | 'sand' | 'navy'

type SectionProps = {
  tone?: SectionTone
  labelledBy?: string
  className?: string
  children: ReactNode
}

const toneClasses: Record<SectionTone, string> = {
  white: 'bg-white',
  mist: 'bg-mist',
  sand: 'bg-sand',
  navy: 'bg-navy text-white',
}

// Section padding 48px on phones, 96px on desktop.
export function Section({ tone = 'white', labelledBy, className, children }: SectionProps) {
  return (
    <section aria-labelledby={labelledBy} className={classNames('py-12 lg:py-24', toneClasses[tone])}>
      <PageContainer className={className}>{children}</PageContainer>
    </section>
  )
}
