import { classNames } from '../../lib/classNames'
import { formatDollars } from '../../lib/formatDollars'
import { ChartDataTable } from './ChartDataTable'

export type ChartPoint = { month: string; fullMonth: string; value: number }

type BalanceLineChartProps = { points: ChartPoint[]; summary: string; tableCaption: string }

const width = 100
const height = 100
const gridLines = [25, 50, 75]

// First and last labels sit inside the chart edges; the rest centre on their point.
function labelAlignment(index: number, count: number) {
  if (index === 0) return 'translate-x-0'
  if (index === count - 1) return '-translate-x-full'
  return '-translate-x-1/2'
}

// Stretches to its box; strokes stay 2px with non-scaling-stroke. The end marker is HTML so it stays round.
export function BalanceLineChart({ points, summary, tableCaption }: BalanceLineChartProps) {
  const values = points.map((point) => point.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const padding = (max - min) * 0.15
  const x = (index: number) => (index / (points.length - 1)) * width
  const y = (value: number) => height - ((value - min + padding) / (max - min + padding * 2)) * height
  const line = points.map((point, index) => `${index === 0 ? 'M' : 'L'}${x(index)},${y(point.value)}`).join(' ')
  const lastY = y(values[values.length - 1])

  return (
    <figure className="flex flex-col gap-2">
      <div className="relative h-40 md:h-48">
        <svg role="img" aria-label={summary} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="size-full overflow-visible">
          {gridLines.map((gridY) => (
            <line key={gridY} x1={0} x2={width} y1={gridY} y2={gridY} vectorEffect="non-scaling-stroke" style={{ stroke: 'var(--hs-chart-grid)' }} />
          ))}
          <path
            d={`${line} L${width},${height} L0,${height} Z`}
            style={{ fill: 'var(--hs-chart-area)', fillOpacity: 'var(--hs-chart-area-opacity)' }}
          />
          <path d={line} fill="none" strokeWidth={2} strokeLinejoin="round" vectorEffect="non-scaling-stroke" style={{ stroke: 'var(--hs-chart-line)' }} />
        </svg>
        <span
          aria-hidden="true"
          className="absolute right-0 size-3 translate-x-1/2 -translate-y-1/2 rounded-pill border-2 border-teal-700 bg-white"
          style={{ top: `${lastY}%` }}
        />
      </div>
      <div aria-hidden="true" className="relative h-4 text-caption text-slate">
        {points.map((point, index) => (
          <span
            key={point.month}
            className={classNames(
              'absolute top-0',
              labelAlignment(index, points.length),
              // Phones show every third month plus the latest, as in the mockup.
              index % 3 !== 0 && index !== points.length - 1 && 'hidden md:inline',
            )}
            style={{ left: `${x(index)}%` }}
          >
            {point.month}
          </span>
        ))}
      </div>
      <ChartDataTable
        caption={tableCaption}
        headers={['Month', 'Balance']}
        rows={points.map((point) => [point.fullMonth, formatDollars(point.value)])}
      />
    </figure>
  )
}
