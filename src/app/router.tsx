import { createBrowserRouter } from 'react-router'
import { MemberLayout } from '../components/layout/MemberLayout'
import { PublicLayout } from '../components/layout/PublicLayout'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { devRoutes } from './devRoutes'
import { RootLayout } from './RootLayout'

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          element: <PublicLayout />,
          children: [
            { index: true, element: <PlaceholderPage title="Home" /> },
            { path: 'retirement-planner', element: <PlaceholderPage title="Retirement planner" /> },
            { path: 'join', element: <PlaceholderPage title="Join" /> },
            { path: 'not-found', element: <PlaceholderPage title="Page not found" /> },
          ],
        },
        { path: 'login', element: <PlaceholderPage title="Log in" /> },
        {
          element: <MemberLayout />,
          children: [
            { path: 'dashboard', element: <PlaceholderPage title="Dashboard" /> },
            { path: 'retirement-manager', element: <PlaceholderPage title="Retirement Manager" /> },
          ],
        },
        ...devRoutes,
        { element: <PublicLayout />, children: [{ path: '*', element: <PlaceholderPage title="Page not found" /> }] },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
