import { Link } from 'react-router'
import { Icon } from '../../components/ui/Icon'
import { retirementManagerContent } from '../../content/retirementManagerContent'
import { dashboardPath } from '../../features/auth/authPaths'

const { breadcrumbLabel, dashboard, title } = retirementManagerContent

// Phone: a single Back link. Larger screens: Dashboard › Retirement Manager.
export function ManagerBreadcrumb() {
  return (
    <nav aria-label={breadcrumbLabel}>
      <ol className="flex items-center gap-2 text-body-s">
        <li className="flex items-center">
          <Link to={dashboardPath} className="inline-flex min-h-11 items-center gap-2 text-body-s-strong text-teal-700 underline underline-offset-4">
            <Icon name="arrow-left" size="inline" className="md:hidden" />
            {dashboard}
          </Link>
        </li>
        <li aria-current="page" className="hidden items-center gap-2 text-slate md:flex">
          <Icon name="chevron-right" size="inline" />
          {title}
        </li>
      </ol>
    </nav>
  )
}
