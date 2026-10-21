export type MixSlice = { name: string; percent: number }

type InvestmentMixDonutProps = { slices: MixSlice[]; summary: string }

const radius = 40
const circumference = 2 * Math.PI * radius
const gap = 1.2
// Fixed order from the style guide: Growth, Balanced, Defensive, Cash.
const sliceColours = ['var(--hs-chart-1)', 'var(--hs-chart-2)', 'var(--hs-chart-3)', 'var(--hs-chart-4)']

export function InvestmentMixDonut({ slices, summary }: InvestmentMixDonutProps) {
  const lengths = slices.map((slice) => (slice.percent / 100) * circumference)
  const arcs = slices.map((slice, index) => ({
    ...slice,
    colour: sliceColours[index],
    dash: Math.max(lengths[index] - gap, 0),
    offset: lengths.slice(0, index).reduce((sum, length) => sum + length, 0),
  }))

  return (
    <div className="flex items-center gap-5 md:gap-6">
      <svg role="img" aria-label={summary} viewBox="0 0 100 100" className="size-28 shrink-0 -rotate-90 sm:size-36">
        {arcs.map((arc) => (
          <circle
            key={arc.name}
            cx={50}
            cy={50}
            r={radius}
            fill="none"
            strokeWidth={16}
            strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
            strokeDashoffset={-arc.offset}
            style={{ stroke: arc.colour }}
          />
        ))}
      </svg>
      <ul className="flex w-full flex-col gap-3">
        {arcs.map((arc) => (
          <li key={arc.name} className="flex items-center gap-3 text-body-m text-ink">
            <span aria-hidden="true" className="size-2.5 shrink-0 rounded-pill" style={{ background: arc.colour }} />
            <span className="flex-1">{arc.name}</span>
            <span className="text-body-m-strong">{arc.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
