import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type CardProps = {
  as?: 'div' | 'section' | 'article' | 'li'
  children: ReactNode
  className?: string
  'aria-labelledby'?: string
}

export function Card({ as: Element = 'div', children, className, ...attributes }: CardProps) {
  return (
    <Element className={classNames('flex flex-col gap-4 rounded-card border border-line bg-white p-5 md:p-6', className)} {...attributes}>
      {children}
    </Element>
  )
}
