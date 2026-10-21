import { Link } from 'react-router'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Notice } from '../../components/ui/Notice'
import { loginContent } from '../../content/loginContent'

export function LoginAlternatives() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4 text-body-s text-slate" aria-hidden="true">
        <span className="h-px flex-1 bg-line" />
        {loginContent.or}
        <span className="h-px flex-1 bg-line" />
      </div>
      <ButtonLink variant="secondary" fullWidth>
        {loginContent.digitalId}
      </ButtonLink>
      <p className="flex flex-wrap items-center justify-center gap-x-2 text-body-m text-slate">
        {loginContent.newMember}
        <Link to="/join" className="inline-flex min-h-11 items-center text-body-m-strong text-teal-700 underline underline-offset-4">
          {loginContent.joinNow}
        </Link>
      </p>
      <Notice variant="demo">{loginContent.demoNotice}</Notice>
    </div>
  )
}
