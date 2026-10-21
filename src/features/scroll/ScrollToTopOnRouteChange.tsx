import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
import { useLenis } from './smoothScrollContext'

export function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useLayoutEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
  }, [pathname, lenis])

  return null
}
