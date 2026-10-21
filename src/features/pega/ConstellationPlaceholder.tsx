import { Icon } from '../../components/ui/Icon'
import { retirementManagerContent } from '../../content/retirementManagerContent'

const { slot } = retirementManagerContent

export const pegaRootId = 'pega-constellation-root'

// The embed slot. Phase 2 mounts the Pega Web Embed (or Constellation React SDK) into #pega-constellation-root.
export function ConstellationPlaceholder() {
  return (
    <section
      aria-labelledby="pega-slot-title"
      className="flex min-h-96 flex-col rounded-card border-dashed-slot border-teal bg-white"
    >
      <h2 id="pega-slot-title" className="border-b border-line px-5 py-4 text-h4 md:px-8">
        {slot.title}
      </h2>
      <div id={pegaRootId} className="flex flex-1 flex-col items-center justify-center gap-3 px-5 py-12 text-center md:px-8">
        <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-tile bg-lagoon-50 text-teal-700">
          <Icon name="grid" size="nav" />
        </span>
        <p className="font-heading text-h3 text-navy">{slot.label}</p>
        <p className="max-w-md text-body-m text-slate">{slot.explanation}</p>
      </div>
    </section>
  )
}
