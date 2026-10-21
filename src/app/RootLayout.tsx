import { Outlet } from 'react-router'
import { RouteAnnouncer } from '../components/layout/RouteAnnouncer'
import { ScrollToTopOnRouteChange } from '../features/scroll/ScrollToTopOnRouteChange'

export function RootLayout() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Outlet />
      <RouteAnnouncer />
    </>
  )
}
