import { useState } from 'react'
import { BalanceLineChart } from '../../components/charts/BalanceLineChart'
import { Card } from '../../components/ui/Card'
import { Chip } from '../../components/ui/Chip'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { dashboardData } from '../../content/dashboardData'

const { balance } = dashboardData
type Period = (typeof balance.periods)[number]['value']

// The period buttons change the selected state only; the demo has one year of data.
export function BalanceCard() {
  const [period, setPeriod] = useState<Period>('1y')

  return (
    <Card as="section" aria-labelledby="balance-title" className="lg:col-span-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 id="balance-title" className="text-body-s text-slate">
            {balance.label}
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-heading text-number-xl text-navy">{balance.amount}</p>
            <Chip tone="positive" icon="trending-up" accessibleText={balance.changeSpoken}>
              {balance.change}
            </Chip>
          </div>
          <p className="text-caption text-slate">{balance.asAt}</p>
        </div>
        <SegmentedControl label={balance.periodLabel} options={balance.periods} value={period} onChange={setPeriod} />
      </div>
      <BalanceLineChart points={balance.history} summary={balance.chartSummary} tableCaption={balance.tableCaption} />
    </Card>
  )
}
