import { createContext, useContext } from 'react'
import type Lenis from 'lenis'

// Null when smooth scrolling is off (reduced motion, or tests).
export const SmoothScrollContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(SmoothScrollContext)
}
