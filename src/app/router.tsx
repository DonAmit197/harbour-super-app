import { createBrowserRouter } from 'react-router'
import { MemberLayout } from '../components/layout/MemberLayout'
import { PublicLayout } from '../components/layout/PublicLayout'
import { RedirectIfSignedIn } from '../features/auth/RedirectIfSignedIn'
import { RequireAuth } from '../features/auth/RequireAuth'
import { DashboardPage } from '../pages/Dashboard/DashboardPage'
import { HomePage } from '../pages/Home/HomePage'
import { JoinPage } from '../pages/Join/JoinPage'
import { LoginPage } from '../pages/Login/LoginPage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { RetirementManagerPage } from '../pages/RetirementManager/RetirementManagerPage'
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
            { path: 'not-found', element: <NotFoundPage /> },
          ],
        },
        {
          path: 'login',
          element: (
            <RedirectIfSignedIn>
              <LoginPage />
            </RedirectIfSignedIn>
          ),
        },
        {
          element: <RequireAuth />,
          children: [
            {
              element: <MemberLayout />,
              children: [
                { path: 'dashboard', element: <DashboardPage /> },
                { path: 'retirement-manager', element: <RetirementManagerPage /> },
              ],
            },
          ],
        },
        ...devRoutes,
        { element: <PublicLayout />, children: [{ path: '*', element: <NotFoundPage /> }] },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
