import type { ReactNode } from 'react'

type VisuallyHiddenProps = {
  as?: 'span' | 'div' | 'h2' | 'caption'
  id?: string
  children: ReactNode
}

// Read by screen readers, not shown on screen.
export function VisuallyHidden({ as: Element = 'span', id, children }: VisuallyHiddenProps) {
  return (
    <Element id={id} className="sr-only">
      {children}
    </Element>
  )
}
