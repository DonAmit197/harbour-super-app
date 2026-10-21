import { PageContainer } from '../../components/layout/PageContainer'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { plannerContent } from '../../content/plannerContent'
import { ReadinessCard } from './ReadinessCard'

const { hero } = plannerContent

type PlannerHeroProps = { retirementManagerPath: string }

export function PlannerHero({ retirementManagerPath }: PlannerHeroProps) {
  return (
    <section aria-labelledby="planner-title" className="bg-gradient-banner text-white">
      <PageContainer className="grid gap-8 py-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col gap-4">
            <p className="text-eyebrow text-lagoon uppercase">{hero.eyebrow}</p>
            <h1 id="planner-title" className="text-display-l text-white lg:text-display-xl">
              {hero.title}
            </h1>
            <p className="text-body-l text-white">{hero.intro}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={retirementManagerPath} variant="accent" withArrow fullWidth className="sm:w-auto">
              {hero.retirementManager}
            </ButtonLink>
            <ButtonLink to="/join" variant="onDark" fullWidth className="sm:w-auto">
              {hero.becomeMember}
            </ButtonLink>
          </div>
          <p className="text-body-s text-lagoon-50">{hero.note}</p>
        </div>
        <div className="lg:col-span-5">
          <ReadinessCard />
        </div>
      </PageContainer>
    </section>
  )
}
