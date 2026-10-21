import { CheckList } from '../../components/sections/CheckList'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Card } from '../../components/ui/Card'
import { FutureLink } from '../../components/ui/FutureLink'
import { Icon } from '../../components/ui/Icon'
import { retirementManagerContent } from '../../content/retirementManagerContent'

const { help, needs } = retirementManagerContent

export function ManagerSidePanel() {
  return (
    <aside className="flex flex-col gap-4 lg:gap-6">
      <Card as="section" aria-labelledby="manager-help">
        <h2 id="manager-help" className="flex items-center gap-2 text-h4">
          <Icon name="help" size="nav" className="text-teal-700" />
          {help.title}
        </h2>
        <p className="text-body-s text-slate">{help.text}</p>
        <FutureLink aria-label={help.phoneLabel} className="inline-flex min-h-11 items-center gap-2 self-start font-heading text-h4 text-navy">
          <Icon name="phone" className="text-teal-700" />
          {help.phone}
        </FutureLink>
        <div>
          <ButtonLink variant="secondary" size="small">
            {help.cta}
          </ButtonLink>
        </div>
      </Card>
      <Card as="section" aria-labelledby="manager-needs">
        <h2 id="manager-needs" className="flex items-center gap-2 text-h4">
          <Icon name="clipboard" size="nav" className="text-teal-700" />
          {needs.title}
        </h2>
        <CheckList items={needs.items} />
      </Card>
    </aside>
  )
}
