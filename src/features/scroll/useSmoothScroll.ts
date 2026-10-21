import { useEffect, useState } from 'react'
import Lenis from 'lenis'

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export function useSmoothScroll() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const motionPreference = window.matchMedia(reducedMotionQuery)
    let instance: Lenis | null = null

    const update = () => {
      instance?.destroy()
      instance = motionPreference.matches ? null : new Lenis({ autoRaf: true, smoothWheel: true })
      setLenis(instance)
    }

    update()
    motionPreference.addEventListener('change', update)
    return () => {
      motionPreference.removeEventListener('change', update)
      instance?.destroy()
    }
  }, [])

  return lenis
}
