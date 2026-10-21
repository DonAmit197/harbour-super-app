import { PageContainer } from '../../components/layout/PageContainer'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Logo } from '../../components/ui/Logo'
import { notFoundContent } from '../../content/notFoundContent'
import { useAuth } from '../../features/auth/authContext'
import { dashboardPath, loginPath } from '../../features/auth/authPaths'
import { usePageTitle } from '../../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle(notFoundContent.pageTitle)
  const { signedIn } = useAuth()

  return (
    <PageContainer className="flex flex-col items-center gap-4 py-16 text-center lg:py-28">
      <Logo variant="mark" alt="" className="w-28 lg:w-40" />
      <p className="text-eyebrow text-teal-700 uppercase">{notFoundContent.eyebrow}</p>
      <h1 className="text-h2 lg:text-display-l">{notFoundContent.title}</h1>
      <p className="text-body-l text-slate">{notFoundContent.intro}</p>
      <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        {signedIn ? (
          <ButtonLink to={dashboardPath} withArrow fullWidth className="sm:w-auto">
            {notFoundContent.dashboard}
          </ButtonLink>
        ) : (
          <>
            <ButtonLink to="/" withArrow fullWidth className="sm:w-auto">
              {notFoundContent.home}
            </ButtonLink>
            <ButtonLink to={loginPath} variant="secondary" fullWidth className="sm:w-auto">
              {notFoundContent.logIn}
            </ButtonLink>
          </>
        )}
      </div>
    </PageContainer>
  )
}
