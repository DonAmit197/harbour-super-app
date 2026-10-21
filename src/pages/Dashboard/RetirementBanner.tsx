import { ButtonLink } from '../../components/ui/ButtonLink'
import { IconTile } from '../../components/ui/IconTile'
import { dashboardCopy } from '../../content/dashboardCopy'
import { retirementManagerPath } from '../../features/auth/authPaths'

const { banner } = dashboardCopy

export function RetirementBanner() {
  return (
    <section
      aria-labelledby="retirement-banner"
      className="flex flex-col gap-5 rounded-panel bg-gradient-banner p-5 text-white md:p-8 lg:flex-row lg:items-center lg:gap-8"
    >
      <IconTile icon="sunrise" tone="sun" size="xlarge" />
      <div className="flex flex-1 flex-col gap-2">
        <h2 id="retirement-banner" className="text-h3 text-white lg:text-h2">
          {banner.title}
        </h2>
        <p className="text-body-m text-white lg:text-body-l">{banner.text}</p>
      </div>
      <ButtonLink to={retirementManagerPath} variant="accent" withArrow fullWidth className="lg:w-auto lg:shrink-0">
        {banner.cta}
      </ButtonLink>
    </section>
  )
}
