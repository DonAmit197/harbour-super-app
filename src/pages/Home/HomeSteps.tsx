import { Section } from '../../components/sections/Section'
import { SectionIntro } from '../../components/sections/SectionIntro'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Card } from '../../components/ui/Card'
import { homeContent } from '../../content/homeContent'

const { steps } = homeContent

export function HomeSteps() {
  return (
    <Section labelledBy="home-steps" className="flex flex-col gap-8">
      <SectionIntro id="home-steps" eyebrow={steps.eyebrow} title={steps.title} intro={steps.intro} />
      <ol className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {steps.items.map((step, index) => (
          <Card as="li" key={step.title}>
            <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-pill bg-navy text-body-s-strong text-white">
              {index + 1}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-h4">{step.title}</h3>
              <p className="text-body-m text-slate">{step.text}</p>
            </div>
          </Card>
        ))}
      </ol>
      <div>
        <ButtonLink to="/retirement-planner" withArrow fullWidth className="sm:w-auto">
          {steps.cta}
        </ButtonLink>
      </div>
    </Section>
  )
}
