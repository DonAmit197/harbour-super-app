import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router'
import { useAuth } from './authContext'
import { AuthProvider } from './AuthProvider'
import { RedirectIfSignedIn } from './RedirectIfSignedIn'
import { RequireAuth } from './RequireAuth'

function LoginStub() {
  const { search } = useLocation()
  const { logIn } = useAuth()
  return (
    <>
      <h1>Log in page</h1>
      <p>search: {search}</p>
      <button onClick={() => logIn(import.meta.env.VITE_DEMO_USERNAME, import.meta.env.VITE_DEMO_PASSWORD)}>Log in</button>
    </>
  )
}

function MemberStub({ title }: { title: string }) {
  const { logOut } = useAuth()
  return (
    <>
      <h1>{title}</h1>
      <button onClick={logOut}>Log out</button>
    </>
  )
}

function renderAt(path: string) {
  const router = createMemoryRouter(
    [
      { path: '/', element: <h1>Home page</h1> },
      { path: '/login', element: <RedirectIfSignedIn><LoginStub /></RedirectIfSignedIn> },
      {
        element: <RequireAuth />,
        children: [
          { path: '/dashboard', element: <MemberStub title="Dashboard page" /> },
          { path: '/retirement-manager', element: <MemberStub title="Retirement Manager page" /> },
        ],
      },
    ],
    { initialEntries: [path] },
  )
  render(<AuthProvider><RouterProvider router={router} /></AuthProvider>)
  return router
}

beforeEach(() => {
  sessionStorage.clear()
  vi.stubEnv('VITE_DEMO_USERNAME', 'demo_user')
  vi.stubEnv('VITE_DEMO_PASSWORD', 'Secret@123')
})
afterEach(() => vi.unstubAllEnvs())

describe('RequireAuth', () => {
  it('sends signed-out visitors to the login page with the wanted page in next', async () => {
    const router = renderAt('/retirement-manager')
    expect(await screen.findByRole('heading', { name: 'Log in page' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/login')
    expect(router.state.location.search).toBe('?next=retirement-manager')
  })

  it('shows the member page when signed in, and stores the session', async () => {
    sessionStorage.setItem('harbour-super-demo-session', JSON.stringify({ signedIn: true }))
    renderAt('/dashboard')
    expect(await screen.findByRole('heading', { name: 'Dashboard page' })).toBeInTheDocument()
  })

  it('redirects the login page to the dashboard when already signed in', async () => {
    sessionStorage.setItem('harbour-super-demo-session', JSON.stringify({ signedIn: true }))
    const router = renderAt('/login')
    expect(await screen.findByRole('heading', { name: 'Dashboard page' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/dashboard')
  })

  it('lands on the dashboard after a successful log in', async () => {
    const router = renderAt('/login?next=retirement-manager')
    await userEvent.click(await screen.findByRole('button', { name: 'Log in' }))
    expect(await screen.findByRole('heading', { name: 'Dashboard page' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/dashboard')
  })

  it('logs out to the home page and clears the session', async () => {
    sessionStorage.setItem('harbour-super-demo-session', JSON.stringify({ signedIn: true }))
    const router = renderAt('/dashboard')
    await userEvent.click(await screen.findByRole('button', { name: 'Log out' }))
    expect(await screen.findByRole('heading', { name: 'Home page' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/')
    expect(sessionStorage.getItem('harbour-super-demo-session')).toBeNull()
  })
})
