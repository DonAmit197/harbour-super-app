import { ContributionBars } from '../../components/charts/ContributionBars'
import { InvestmentMixDonut } from '../../components/charts/InvestmentMixDonut'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Card } from '../../components/ui/Card'
import { dashboardData } from '../../content/dashboardData'

const { investmentMix, contributions } = dashboardData

export function InvestmentMixCard() {
  return (
    <Card as="section" aria-labelledby="investment-mix" className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
      <h2 id="investment-mix" className="text-h4">
        {investmentMix.title}
      </h2>
      <InvestmentMixDonut slices={investmentMix.options} summary={investmentMix.chartSummary} />
      <div>
        <ButtonLink variant="text" size="small" withArrow>
          {investmentMix.action}
        </ButtonLink>
      </div>
    </Card>
  )
}

export function ContributionsCard() {
  return (
    <Card as="section" aria-labelledby="contributions" className="lg:col-span-4 lg:col-start-5 lg:row-start-2">
      <h2 id="contributions" className="text-h4">
        {contributions.title}
      </h2>
      <p className="flex items-baseline gap-2">
        <span className="font-heading text-h2 text-navy">{contributions.total}</span>
        <span className="text-body-s text-slate">{contributions.since}</span>
      </p>
      <ContributionBars months={contributions.months} summary={contributions.chartSummary} tableCaption={contributions.tableCaption} />
      <p className="text-caption text-slate">{contributions.note}</p>
    </Card>
  )
}
