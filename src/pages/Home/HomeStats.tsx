import { Section } from '../../components/sections/Section'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { homeContent } from '../../content/homeContent'

const { stats } = homeContent

export function HomeStats() {
  return (
    <Section tone="navy" labelledBy="home-stats" className="flex flex-col gap-6">
      <VisuallyHidden as="h2" id="home-stats">
        {stats.title}
      </VisuallyHidden>
      <dl className="grid gap-6 md:grid-cols-3">
        {stats.items.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1">
            <dt className="text-body-m text-white">{stat.label}</dt>
            <dd className="font-heading text-number-xl text-sun">
              {stat.spoken ? (
                <>
                  <span aria-hidden="true">{stat.value}</span>
                  <VisuallyHidden>{stat.spoken}</VisuallyHidden>
                </>
              ) : (
                stat.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-caption text-lagoon-50">{stats.note}</p>
    </Section>
  )
}
