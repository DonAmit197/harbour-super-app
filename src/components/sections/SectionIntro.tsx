import { classNames } from '../../lib/classNames'

type SectionIntroProps = {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}

export function SectionIntro({ id, eyebrow, title, intro, className }: SectionIntroProps) {
  return (
    <div className={classNames('flex flex-col gap-3', className)}>
      {eyebrow && <p className="text-eyebrow text-teal-700 uppercase">{eyebrow}</p>}
      <h2 id={id} className="text-h2 lg:text-display-l">
        {title}
      </h2>
      {intro && <p className="text-body-l text-slate">{intro}</p>}
    </div>
  )
}
