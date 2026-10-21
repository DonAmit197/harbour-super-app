import { footerContent } from '../../content/footerContent'
import { footerColumns, legalLinks } from '../../content/navigation'
import { Accordion } from '../ui/Accordion'
import { AppLink } from '../ui/AppLink'
import { Logo } from '../ui/Logo'
import { FooterContact } from './FooterContact'
import { FooterLinkList } from './FooterLinkList'
import { PageContainer } from './PageContainer'

const accordionItems = footerColumns.map((column) => ({
  id: column.title.toLowerCase().replace(/\s+/g, '-'),
  title: column.title,
  content: <FooterLinkList links={column.links} />,
}))

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <PageContainer className="flex flex-col gap-8 py-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex shrink-0 flex-col gap-4">
            <Logo variant="reverse" className="w-40 lg:w-44" />
            <p className="text-body-l text-lagoon">{footerContent.tagline}</p>
          </div>
          <Accordion items={accordionItems} headingLevel="h2" tone="dark" className="md:hidden" />
          <div className="hidden gap-10 md:grid md:grid-cols-4 lg:gap-14">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h2 className="text-body-m-strong text-white">{column.title}</h2>
                <FooterLinkList links={column.links} />
              </div>
            ))}
            <FooterContact />
          </div>
          <div className="md:hidden">
            <FooterContact />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/20 pt-8">
          <p className="text-body-s text-white">{footerContent.acknowledgement}</p>
          <p className="text-caption text-lagoon-50">{footerContent.disclaimer}</p>
          <nav aria-label={footerContent.legalNav}>
            <ul className="flex flex-wrap items-center gap-x-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <AppLink to={link.to} className="inline-flex min-h-11 items-center text-body-s text-white hover:underline">
                    {link.label}
                  </AppLink>
                </li>
              ))}
              <li className="text-body-s text-lagoon-50">{footerContent.copyright}</li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </footer>
  )
}
