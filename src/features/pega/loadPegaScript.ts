let pending: Promise<void> | null = null

export function loadPegaScript(src: string): Promise<void> {
  if (customElements.get('pega-embed')) return Promise.resolve()
  pending ??= new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      pending = null
      script.remove()
      reject(new Error(`Could not load ${src}`))
    }
    document.head.append(script)
  })
  return pending
}
