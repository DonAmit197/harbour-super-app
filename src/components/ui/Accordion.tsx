import { useId, useState, type ReactNode } from 'react'
import { classNames } from '../../lib/classNames'
import { Icon } from './Icon'

export type AccordionItem = { id: string; title: string; content: ReactNode }
export type AccordionTone = 'light' | 'dark'

type AccordionProps = {
  items: ReadonlyArray<AccordionItem>
  headingLevel?: 'h2' | 'h3' | 'h4'
  tone?: AccordionTone
  className?: string
}

const toneClasses: Record<AccordionTone, { row: string; button: string; panel: string }> = {
  light: { row: 'border-line', button: 'text-navy', panel: 'text-ink' },
  dark: { row: 'border-white/20', button: 'text-white', panel: 'text-lagoon-50' },
}

export function Accordion({ items, headingLevel: Heading = 'h3', tone = 'light', className }: AccordionProps) {
  const baseId = useId()
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set())
  const styles = toneClasses[tone]

  const toggle = (id: string) =>
    setOpenIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className={className}>
      {items.map((item) => {
        const open = openIds.has(item.id)
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`
        return (
          <div key={item.id} className={classNames('border-b', styles.row)}>
            <Heading className="text-body-m-strong">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={classNames('flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left', styles.button)}
              >
                <span>{item.title}</span>
                <Icon name="chevron-down" className={classNames('transition-transform', open && 'rotate-180')} />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className={classNames('pb-4', styles.panel)}>
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
