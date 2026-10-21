import { classNames } from '../../lib/classNames'
import type { ChartPoint } from './BalanceLineChart'
import { formatDollars } from '../../lib/formatDollars'
import { ChartDataTable } from './ChartDataTable'

type ContributionBarsProps = { months: ChartPoint[]; summary: string; tableCaption: string }

// Full class names so Tailwind can find them; bars are scaled in 10% steps of the tallest month.
const heights = ['h-0', 'h-1/10', 'h-2/10', 'h-3/10', 'h-4/10', 'h-5/10', 'h-6/10', 'h-7/10', 'h-8/10', 'h-9/10', 'h-full']

export function ContributionBars({ months, summary, tableCaption }: ContributionBarsProps) {
  const max = Math.max(...months.map((month) => month.value))

  return (
    <figure className="flex flex-col gap-2">
      <div role="img" aria-label={summary} className="flex h-28 items-end gap-4 border-b border-line sm:gap-8">
        {months.map((month, index) => {
          const step = Math.max(1, Math.round((month.value / max) * 10))
          const current = index === months.length - 1
          return (
            <span key={month.month} className="flex h-full flex-1 items-end justify-center">
              <span className={classNames('w-full max-w-12 rounded-t-bar', heights[step], current ? 'bg-teal-700' : 'bg-lagoon')} />
            </span>
          )
        })}
      </div>
      <div aria-hidden="true" className="flex gap-4 text-caption text-slate sm:gap-8">
        {months.map((month) => (
          <span key={month.month} className="flex-1 text-center">
            {month.month}
          </span>
        ))}
      </div>
      <ChartDataTable
        caption={tableCaption}
        headers={['Month', 'Contributions']}
        rows={months.map((month) => [month.fullMonth, formatDollars(month.value)])}
      />
    </figure>
  )
}
