import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type DevSectionProps = { title: string; dark?: boolean; children: ReactNode }

export function DevSection({ title, dark = false, children }: DevSectionProps) {
  return (
    <section className={classNames('flex flex-col gap-4 rounded-panel p-5 md:p-6', dark ? 'bg-navy' : 'bg-mist')}>
      <h2 className={classNames('text-h3', dark && 'text-white')}>{title}</h2>
      {children}
    </section>
  )
}
