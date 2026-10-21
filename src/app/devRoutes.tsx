import type { RouteObject } from 'react-router'

// Dev-only pages are lazy so they never reach the production bundle.
export const devRoutes: RouteObject[] = import.meta.env.DEV
  ? [
      {
        path: 'dev/tokens',
        lazy: () => import('../pages/DevTokens/DevTokensPage').then((module) => ({ Component: module.DevTokensPage })),
      },
      {
        path: 'dev/icons',
        lazy: () => import('../pages/DevIcons/DevIconsPage').then((module) => ({ Component: module.DevIconsPage })),
      },
      {
        path: 'dev/components',
        lazy: () =>
          import('../pages/DevComponents/DevComponentsPage').then((module) => ({ Component: module.DevComponentsPage })),
      },
    ]
  : []
