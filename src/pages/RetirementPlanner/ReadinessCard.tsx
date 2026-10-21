import { Icon } from '../../components/ui/Icon'
import { IconTile } from '../../components/ui/IconTile'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { plannerContent } from '../../content/plannerContent'

const { readiness } = plannerContent
const doneCount = readiness.steps.filter((step) => step.done).length
const stepWidths = ['w-0', 'w-1/5', 'w-2/5', 'w-3/5', 'w-4/5', 'w-full']

export function ReadinessCard() {
  return (
    <section aria-labelledby="readiness-title" className="flex flex-col gap-4 rounded-panel bg-white p-5 text-ink shadow-overlay md:p-6">
      <div className="flex items-center gap-3">
        <IconTile icon="sunrise" tone="sun" />
        <div>
          <h2 id="readiness-title" className="text-h4">
            {readiness.title}
          </h2>
          <p className="text-body-s text-slate">{readiness.progress}</p>
        </div>
      </div>
      <div
        role="progressbar"
        aria-label={readiness.progressLabel}
        aria-valuemin={0}
        aria-valuemax={readiness.steps.length}
        aria-valuenow={doneCount}
        aria-valuetext={readiness.progress}
        className="h-2 overflow-hidden rounded-pill bg-mist"
      >
        <div className={`h-full rounded-pill bg-teal ${stepWidths[doneCount]}`} />
      </div>
      <ul className="flex flex-col gap-3">
        {readiness.steps.map((step) => (
          <li key={step.label} className="flex items-start gap-3 text-body-m">
            {step.done ? (
              <Icon name="check-circle" className="mt-0.5 text-teal-700" />
            ) : (
              <span aria-hidden="true" className="mt-0.5 size-5 shrink-0 rounded-pill border-2 border-line bg-mist" />
            )}
            <span className={step.done ? 'text-ink' : 'text-slate'}>
              {step.label}
              <VisuallyHidden>, {step.done ? readiness.done : readiness.notStarted}</VisuallyHidden>
            </span>
          </li>
        ))}
      </ul>
      <p className="text-caption text-slate">{readiness.note}</p>
    </section>
  )
}
