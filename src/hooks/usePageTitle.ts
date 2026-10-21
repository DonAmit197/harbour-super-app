import { useEffect } from 'react'

export const siteName = 'Harbour Super'

export function usePageTitle(pageName: string) {
  useEffect(() => {
    document.title = `${pageName} – ${siteName}`
  }, [pageName])
}
