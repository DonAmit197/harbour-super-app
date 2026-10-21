import { PageContainer } from '../../components/layout/PageContainer'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { Icon } from '../../components/ui/Icon'
import { homeContent } from '../../content/homeContent'

const { hero } = homeContent
const imagePath = `${import.meta.env.BASE_URL}images/`

// One photo: rounded below the buttons on phones, full-bleed behind a 560px copy column on desktop.
export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className="relative isolate bg-gradient-hero-wash lg:flex lg:h-180 lg:items-center">
      <PageContainer className="flex flex-col gap-6 py-8 lg:py-0">
        <div className="relative z-10 flex flex-col gap-4 lg:max-w-140">
          <p className="text-eyebrow text-teal-700 uppercase">{hero.eyebrow}</p>
          <h1 id="home-title" className="text-display-l lg:text-display-xl">
            {hero.titleStart} <span className="text-teal">{hero.titleHighlight}</span>
          </h1>
          <p className="text-body-l text-slate">{hero.intro}</p>
        </div>
        <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/login" withArrow fullWidth className="sm:w-auto">
            {hero.logIn}
          </ButtonLink>
          <ButtonLink to="/retirement-planner" variant="secondary" withArrow fullWidth className="sm:w-auto">
            {hero.planner}
          </ButtonLink>
        </div>
        <p className="relative z-10 flex items-center gap-2 text-body-s text-slate">
          <Icon name="shield" size="inline" />
          {hero.trust}
        </p>
        <img
          src={`${imagePath}hero-mobile.jpg`}
          srcSet={`${imagePath}hero-mobile.jpg 960w, ${imagePath}hero.jpg 1920w`}
          sizes="(min-width: 1024px) 100vw, calc(100vw - 32px)"
          width={1920}
          height={960}
          alt={hero.imageAlt}
          fetchPriority="high"
          className="h-75 w-full rounded-panel object-cover object-right lg:absolute lg:inset-0 lg:z-0 lg:h-full lg:rounded-none lg:object-center"
        />
      </PageContainer>
    </section>
  )
}
