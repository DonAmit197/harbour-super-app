import { classNames } from '../../lib/classNames'
import { Icon } from '../ui/Icon'

type CheckListProps = { items: string[]; className?: string }

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={classNames('flex flex-col gap-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body-m text-ink">
          <Icon name="check" className="mt-0.5 text-teal-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
