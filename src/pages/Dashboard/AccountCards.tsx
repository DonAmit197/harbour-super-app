import { ButtonLink } from '../../components/ui/ButtonLink'
import { Card } from '../../components/ui/Card'
import { Notice } from '../../components/ui/Notice'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { dashboardCopy } from '../../content/dashboardCopy'
import { classNames } from '../../lib/classNames'

const { nomination, transactions, insurance } = dashboardCopy

export function NominationAlert() {
  return (
    <section aria-label={nomination.title} className="lg:col-span-4 lg:col-start-9 lg:row-start-2">
      <Notice variant="warning" title={nomination.title} titleLevel="h2" className="h-full">
        <p className="text-body-s">{nomination.text}</p>
        <div>
          <ButtonLink variant="secondary" size="small" withArrow>
            {nomination.cta}
          </ButtonLink>
        </div>
      </Notice>
    </section>
  )
}

export function TransactionsCard() {
  return (
    <Card as="section" aria-labelledby="transactions" className="lg:col-span-8">
      <div className="flex items-center justify-between gap-4">
        <h2 id="transactions" className="text-h4">
          {transactions.title}
        </h2>
        <ButtonLink variant="text" size="small" withArrow>
          <span aria-hidden="true">{transactions.viewAll}</span>
          <VisuallyHidden>{transactions.viewAllLabel}</VisuallyHidden>
        </ButtonLink>
      </div>
      <ul className="flex flex-col">
        {transactions.items.map((item) => (
          <li key={item.description + item.date} className="flex items-center justify-between gap-4 border-b border-line py-3">
            <span className="flex flex-col">
              <span className="text-body-s-strong text-ink">{item.description}</span>
              <span className="text-caption text-slate">{item.date}</span>
            </span>
            <span className={classNames('text-body-s-strong', item.credit ? 'text-positive' : 'text-ink')}>
              <VisuallyHidden>{item.credit ? transactions.creditWord : transactions.debitWord}: </VisuallyHidden>
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function InsuranceCard() {
  return (
    <Card as="section" aria-labelledby="insurance" className="lg:col-span-4">
      <h2 id="insurance" className="text-h4">
        {insurance.title}
      </h2>
      <dl className="flex flex-col gap-3">
        {insurance.items.map((item) => (
          <div key={item.label} className="flex justify-between gap-4 text-body-s">
            <dt className="text-slate">{item.label}</dt>
            <dd className="text-body-s-strong text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <ButtonLink variant="text" size="small" withArrow>
          {insurance.cta}
        </ButtonLink>
      </div>
    </Card>
  )
}
