import { useLocation } from 'react-router'
import { SkipLink } from '../../components/layout/SkipLink'
import { Icon } from '../../components/ui/Icon'
import { Notice } from '../../components/ui/Notice'
import { loginContent } from '../../content/loginContent'
import { wantsRetirementManager } from '../../features/auth/authPaths'
import { usePageTitle } from '../../hooks/usePageTitle'
import { LoginAlternatives } from './LoginAlternatives'
import { LoginForm } from './LoginForm'
import { LoginTopBar } from './LoginTopBar'

export function LoginPage() {
  usePageTitle(loginContent.pageTitle)
  const showNextNotice = wantsRetirementManager(useLocation().search)

  return (
    <div className="min-h-dvh bg-white lg:grid lg:grid-cols-2">
      <SkipLink />
      <div className="flex flex-col px-4 pb-10 lg:px-20">
        <LoginTopBar />
        <main id="main" tabIndex={-1} className="mx-auto flex w-full max-w-110 flex-col gap-6 pt-2 outline-none lg:pt-6">
          {showNextNotice && <Notice variant="info">{loginContent.nextNotice}</Notice>}
          <div className="flex flex-col gap-2">
            <h1 className="text-display-l">{loginContent.title}</h1>
            <p className="text-body-l text-slate">{loginContent.intro}</p>
          </div>
          <LoginForm />
          <LoginAlternatives />
        </main>
        <footer className="mx-auto w-full max-w-110 pt-5">
          <p className="flex items-start gap-2 text-caption text-slate">
            <Icon name="shield" size="inline" />
            {loginContent.safety}
          </p>
        </footer>
      </div>
      <div className="hidden bg-navy lg:block">
        <img
          src={`${import.meta.env.BASE_URL}images/login.jpg`}
          width={720}
          height={960}
          alt={loginContent.imageAlt}
          loading="lazy"
          className="sticky top-0 h-dvh w-full object-cover object-top"
        />
      </div>
    </div>
  )
}
