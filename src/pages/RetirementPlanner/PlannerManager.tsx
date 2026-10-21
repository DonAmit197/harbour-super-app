import { FeatureCard } from '../../components/sections/FeatureCard'
import { Section } from '../../components/sections/Section'
import { SectionIntro } from '../../components/sections/SectionIntro'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Icon } from '../../components/ui/Icon'
import { plannerContent } from '../../content/plannerContent'

const { manager } = plannerContent

type PlannerManagerProps = { retirementManagerPath: string }

export function PlannerManager({ retirementManagerPath }: PlannerManagerProps) {
  return (
    <Section labelledBy="planner-manager" className="flex flex-col gap-8">
      <SectionIntro id="planner-manager" eyebrow={manager.eyebrow} title={manager.title} intro={manager.intro} />
      <ul className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {manager.features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </ul>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <ButtonLink to={retirementManagerPath} withArrow fullWidth className="sm:w-auto">
          {manager.cta}
        </ButtonLink>
        <p className="flex items-center gap-2 text-body-s text-slate">
          <Icon name="lock" size="inline" />
          {manager.secureNote}
        </p>
      </div>
    </Section>
  )
}
