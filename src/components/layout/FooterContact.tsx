import { footerContent } from '../../content/footerContent'
import { ButtonLink } from '../ui/ButtonLink'
import { FutureLink } from '../ui/FutureLink'
import { Icon } from '../ui/Icon'

export function FooterContact() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-body-m-strong text-white">{footerContent.contactTitle}</h2>
      <FutureLink
        aria-label={footerContent.phoneLabel}
        className="inline-flex min-h-11 items-center gap-2 self-start font-heading text-h4 text-white hover:underline"
      >
        <Icon name="phone" className="text-lagoon" />
        {footerContent.phone}
      </FutureLink>
      <p className="text-body-s text-lagoon-50">{footerContent.hours}</p>
      <div className="mt-2">
        <ButtonLink variant="onDark" size="small">
          {footerContent.bookAppointment}
        </ButtonLink>
      </div>
    </div>
  )
}
