import { CheckList } from '../../components/sections/CheckList'
import { Section } from '../../components/sections/Section'
import { plannerContent } from '../../content/plannerContent'

const { beforeYouStart } = plannerContent

export function PlannerBeforeYouStart() {
  return (
    <Section tone="sand" labelledBy="before-you-start" className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-3">
        <h2 id="before-you-start" className="text-h2 lg:text-display-l">
          {beforeYouStart.title}
        </h2>
        <p className="text-body-l text-slate">{beforeYouStart.intro}</p>
      </div>
      <div className="rounded-card bg-white p-5 md:p-6">
        <CheckList items={beforeYouStart.items} />
      </div>
    </Section>
  )
}
