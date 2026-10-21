import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type PageContainerProps = { children: ReactNode; className?: string }

// 16px gutter on phones, 80px on desktop, content capped at 1280px.
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className="px-4 lg:px-20">
      <div className={classNames('mx-auto w-full max-w-content', className)}>{children}</div>
    </div>
  )
}
