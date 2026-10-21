import { FeatureCard } from '../../components/sections/FeatureCard'
import { Section } from '../../components/sections/Section'
import { SectionIntro } from '../../components/sections/SectionIntro'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { homeContent } from '../../content/homeContent'

const { help } = homeContent

export function HomeHelp() {
  return (
    <Section tone="mist" labelledBy="home-help" className="flex flex-col gap-8">
      <SectionIntro id="home-help" title={help.title} />
      <ul className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {help.items.map(({ action, ...feature }) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            action={
              <ButtonLink variant="text" withArrow>
                {action}
              </ButtonLink>
            }
          />
        ))}
      </ul>
    </Section>
  )
}
