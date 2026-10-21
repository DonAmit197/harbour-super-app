import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// After a route change (not the first load), move focus to the page h1 and pass on the title to announce.
export function useFocusMainHeading(onNavigated: (title: string) => void) {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    const heading = document.querySelector<HTMLHeadingElement>('main h1') ?? document.querySelector<HTMLHeadingElement>('h1')
    if (heading) {
      heading.tabIndex = -1
      heading.focus({ preventScroll: true })
    }
    onNavigated(document.title)
  }, [pathname, onNavigated])
}
