import { Link } from 'react-router'
import { Icon } from '../../components/ui/Icon'
import { Logo } from '../../components/ui/Logo'
import { loginContent } from '../../content/loginContent'

// Phone: Back on the left, logo on the right. Desktop: logo on the left, Back to home on the right.
export function LoginTopBar() {
  return (
    <header className="flex h-16 items-center justify-between lg:h-24">
      <nav aria-label={loginContent.topNav} className="order-1 lg:order-2">
        <Link to="/" className="-ml-1 inline-flex min-h-11 items-center gap-2 px-1 text-body-m-strong text-teal-700 hover:underline">
          <Icon name="arrow-left" />
          <span className="lg:hidden">{loginContent.back}</span>
          <span className="hidden lg:inline">{loginContent.backToHome}</span>
        </Link>
      </nav>
      <Link to="/" aria-label={loginContent.homeLabel} className="order-2 inline-flex min-h-11 items-center lg:order-1">
        <Logo alt="" className="w-32 lg:w-44" />
      </Link>
    </header>
  )
}
