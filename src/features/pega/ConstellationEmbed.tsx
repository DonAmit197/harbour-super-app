import { useRef } from 'react'
import { retirementManagerContent } from '../../content/retirementManagerContent'
import { usePegaEmbed } from './usePegaEmbed'

const { slot } = retirementManagerContent

export const pegaRootId = 'pega-constellation-root'

// Hosts the Pega Retirement Income Application through Pega Web Embed.
export function ConstellationEmbed() {
  const mountRef = useRef<HTMLDivElement>(null)
  const status = usePegaEmbed(mountRef)

  return (
    <section aria-labelledby="pega-slot-title" className="flex min-h-96 flex-col rounded-card border border-line bg-white">
      <h2 id="pega-slot-title" className="border-b border-line px-5 py-4 text-h4 md:px-8">
        {slot.title}
      </h2>
      <output className={status === 'ready' ? 'sr-only' : 'block px-5 py-12 text-center md:px-8'}>
        {status === 'loading' && <p className="text-body-m text-slate">{slot.loading}</p>}
        {status === 'error' && (
          <>
            <p className="font-heading text-h3 text-navy">{slot.errorTitle}</p>
            <p className="mt-2 text-body-m text-slate">{slot.errorText}</p>
          </>
        )}
      </output>
      <div id={pegaRootId} ref={mountRef} className="flex-1 p-2 md:p-4" />
    </section>
  )
}
