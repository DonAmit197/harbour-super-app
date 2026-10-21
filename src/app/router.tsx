import { createBrowserRouter, type RouteObject } from 'react-router'

// Dev-only pages are lazy so they never reach the production bundle.
const devRoutes: RouteObject[] = import.meta.env.DEV
  ? [
      {
        path: 'dev/tokens',
        lazy: () => import('../pages/DevTokens/DevTokensPage').then((module) => ({ Component: module.DevTokensPage })),
      },
      {
        path: 'dev/icons',
        lazy: () => import('../pages/DevIcons/DevIconsPage').then((module) => ({ Component: module.DevIconsPage })),
      },
    ]
  : []

export const router = createBrowserRouter(
  [...devRoutes, { path: '*', element: <main id="main" /> }],
  { basename: import.meta.env.BASE_URL },
)
