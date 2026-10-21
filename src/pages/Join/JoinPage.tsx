import { PageContainer } from '../../components/layout/PageContainer'
import { CheckList } from '../../components/sections/CheckList'
import { FeatureCard } from '../../components/sections/FeatureCard'
import { Section } from '../../components/sections/Section'
import { SectionIntro } from '../../components/sections/SectionIntro'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Icon } from '../../components/ui/Icon'
import { joinContent } from '../../content/joinContent'
import { usePageTitle } from '../../hooks/usePageTitle'

const { hero, reasons, needs } = joinContent

export function JoinPage() {
  usePageTitle(joinContent.pageTitle)
  return (
    <>
      <section aria-labelledby="join-title" className="bg-sand">
        <PageContainer className="flex flex-col gap-6 py-12 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-eyebrow text-teal-700 uppercase">{hero.eyebrow}</p>
            <h1 id="join-title" className="text-display-l lg:text-display-xl">
              {hero.title}
            </h1>
            <p className="text-body-l text-slate">{hero.intro}</p>
          </div>
          <div>
            <ButtonLink withArrow fullWidth className="sm:w-auto">
              {hero.cta}
            </ButtonLink>
          </div>
          <p className="flex items-center gap-2 text-body-s text-slate">
            <Icon name="info" size="inline" />
            {hero.note}
          </p>
        </PageContainer>
      </section>
      <Section labelledBy="join-reasons" className="flex flex-col gap-8">
        <SectionIntro id="join-reasons" title={reasons.title} />
        <ul className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {reasons.items.map((reason) => (
            <FeatureCard key={reason.title} {...reason} />
          ))}
        </ul>
        <section aria-labelledby="join-needs" className="flex flex-col gap-4 rounded-panel bg-mist p-5 md:p-6">
          <h2 id="join-needs" className="text-h4">
            {needs.title}
          </h2>
          <CheckList items={needs.items} />
        </section>
      </Section>
    </>
  )
}
