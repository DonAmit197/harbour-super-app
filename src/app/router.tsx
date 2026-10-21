import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter(
  [{ path: '*', element: <main id="main" /> }],
  { basename: import.meta.env.BASE_URL },
)
