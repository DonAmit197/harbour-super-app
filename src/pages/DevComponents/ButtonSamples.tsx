import { Button } from '../../components/ui/Button'
import { ButtonLink } from '../../components/ui/ButtonLink'
import { FutureLink } from '../../components/ui/FutureLink'
import type { ButtonSize, ButtonVariant } from '../../components/ui/buttonStyles'
import { DevSection } from './DevSection'

const lightVariants: ButtonVariant[] = ['primary', 'secondary', 'accent', 'text']
const sizes: ButtonSize[] = ['large', 'small']

export function ButtonSamples() {
  return (
    <>
      <DevSection title="Buttons">
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-3">
            {lightVariants.map((variant) => (
              <Button key={variant} variant={variant} size={size} withArrow={variant !== 'text'}>
                {variant} {size}
              </Button>
            ))}
          </div>
        ))}
        <Button fullWidth>Full width on phones</Button>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink to="/dev/tokens" variant="secondary">
            Button link to tokens
          </ButtonLink>
          <ButtonLink variant="accent" size="small" withArrow>
            Retirement Manager
          </ButtonLink>
          <FutureLink className="inline-flex min-h-11 items-center text-body-m-strong text-teal-700 underline underline-offset-4">Future link (404)</FutureLink>
        </div>
      </DevSection>
      <DevSection title="Buttons on dark" dark>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((size) => (
            <Button key={size} variant="onDark" size={size} withArrow>
              onDark {size}
            </Button>
          ))}
          <Button variant="accent" withArrow>
            Open Retirement Manager
          </Button>
        </div>
      </DevSection>
    </>
  )
}
