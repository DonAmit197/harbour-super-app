import { RouterProvider } from 'react-router'
import { AuthProvider } from '../features/auth/AuthProvider'
import { SmoothScrollContext } from '../features/scroll/smoothScrollContext'
import { useSmoothScroll } from '../features/scroll/useSmoothScroll'
import { router } from './router'

export function App() {
  const lenis = useSmoothScroll()
  return (
    <AuthProvider>
      <SmoothScrollContext value={lenis}>
        <RouterProvider router={router} />
      </SmoothScrollContext>
    </AuthProvider>
  )
}
