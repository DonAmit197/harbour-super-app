import { useCallback, useState } from 'react'
import { useFocusMainHeading } from '../../hooks/useFocusMainHeading'

export function RouteAnnouncer() {
  const [message, setMessage] = useState('')
  const announce = useCallback((title: string) => setMessage(title), [])
  useFocusMainHeading(announce)

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  )
}
