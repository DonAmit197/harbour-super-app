import { Card } from '../../components/ui/Card'
import { AppLink } from '../../components/ui/AppLink'
import { Icon } from '../../components/ui/Icon'
import { IconTile } from '../../components/ui/IconTile'
import { quickActions } from '../../content/dashboardData'
import { classNames } from '../../lib/classNames'

export function QuickActions() {
  return (
    <Card as="section" aria-labelledby="quick-actions" className="lg:col-span-4">
      <h2 id="quick-actions" className="text-h4">
        {quickActions.title}
      </h2>
      <ul className="flex flex-col gap-2">
        {quickActions.items.map((action) => (
          <li key={action.title}>
            <AppLink
              to={action.to}
              className={classNames(
                'flex min-h-14 items-center gap-3 rounded-tile p-3 hover:bg-mist',
                action.highlight ? 'border-strong border-sun bg-sun-50' : 'border border-line',
              )}
            >
              <IconTile icon={action.icon} size="small" tone={action.highlight ? 'sun' : 'lagoon'} />
              <span className="flex flex-1 flex-col">
                <span className="text-body-s-strong text-navy">{action.title}</span>
                <span className="text-caption text-slate">{action.text}</span>
              </span>
              <Icon name="chevron-right" className="text-navy" />
            </AppLink>
          </li>
        ))}
      </ul>
    </Card>
  )
}
