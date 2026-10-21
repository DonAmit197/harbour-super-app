import { createBrowserRouter } from 'react-router'
import { MemberLayout } from '../components/layout/MemberLayout'
import { PublicLayout } from '../components/layout/PublicLayout'
import { RedirectIfSignedIn } from '../features/auth/RedirectIfSignedIn'
import { RequireAuth } from '../features/auth/RequireAuth'
import { HomePage } from '../pages/Home/HomePage'
import { JoinPage } from '../pages/Join/JoinPage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { RetirementPlannerPage } from '../pages/RetirementPlanner/RetirementPlannerPage'
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
            { index: true, element: <HomePage /> },
            { path: 'retirement-planner', element: <RetirementPlannerPage /> },
            { path: 'join', element: <JoinPage /> },
            { path: 'not-found', element: <PlaceholderPage title="Page not found" /> },
          ],
        },
        {
          path: 'login',
          element: (
            <RedirectIfSignedIn>
              <PlaceholderPage title="Log in" />
            </RedirectIfSignedIn>
          ),
        },
        {
          element: <RequireAuth />,
          children: [
            {
              element: <MemberLayout />,
              children: [
                { path: 'dashboard', element: <PlaceholderPage title="Dashboard" /> },
                { path: 'retirement-manager', element: <PlaceholderPage title="Retirement Manager" /> },
              ],
            },
          ],
        },
        ...devRoutes,
        { element: <PublicLayout />, children: [{ path: '*', element: <PlaceholderPage title="Page not found" /> }] },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
