import { classNames } from '../../lib/classNames'
import { FutureLink } from '../ui/FutureLink'
import { Icon } from '../ui/Icon'
import type { IconName } from '../ui/iconNames'

export type Topic = { icon: IconName; title: string; text?: string; tone?: 'lagoon' | 'sand' }

// Topic pages are not built yet, so every tile goes to the 404 page.
export function TopicTile({ icon, title, text, tone = 'sand' }: Topic) {
  const toneClass = tone === 'lagoon' ? 'bg-lagoon-50' : 'bg-sand'

  if (!text) {
    return (
      <FutureLink
        className={classNames('flex h-full min-h-24 flex-col items-center justify-center gap-3 rounded-tile p-4 text-center hover:brightness-97', toneClass)}
      >
        <Icon name={icon} size="tile" className="text-teal-700" />
        <span className="text-body-s-strong text-navy">{title}</span>
      </FutureLink>
    )
  }

  return (
    <FutureLink className={classNames('flex h-full items-center gap-4 rounded-tile p-4 hover:brightness-97', toneClass)}>
      <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-input bg-white text-teal-700">
        <Icon name={icon} />
      </span>
      <span className="flex flex-1 flex-col gap-1">
        <span className="font-heading text-h4 text-navy">{title}</span>
        <span className="text-body-s text-slate">{text}</span>
      </span>
      <Icon name="chevron-right" className="text-navy" />
    </FutureLink>
  )
}
