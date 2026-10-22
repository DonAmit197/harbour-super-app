import { type RefObject, useEffect, useState } from 'react'
import { loadPegaScript } from './loadPegaScript'
import { pegaEmbedConfig } from './pegaEmbedConfig'

export type PegaEmbedStatus = 'loading' | 'ready' | 'error'

export function usePegaEmbed(mountRef: RefObject<HTMLDivElement | null>) {
  const [status, setStatus] = useState<PegaEmbedStatus>('loading')

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    let cancelled = false
    // Built outside React so Pega fully owns the element and its children.
    const embed = document.createElement('pega-embed')
    Object.entries(pegaEmbedConfig.attributes).forEach(([name, value]) => embed.setAttribute(name, value))
    embed.style.width = '100%'

    loadPegaScript(pegaEmbedConfig.scriptUrl)
      .then(() => {
        if (cancelled) return
        mount.append(embed)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
      embed.remove()
    }
  }, [mountRef])

  return status
}
