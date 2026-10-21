import { Accordion } from '../../components/ui/Accordion'
import { Card } from '../../components/ui/Card'
import { IconTile } from '../../components/ui/IconTile'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { DevSection } from './DevSection'

const faqItems = [
  { id: 'income', title: 'When can I start a retirement income?', content: <p>Sample answer text for the accordion.</p> },
  { id: 'minimum', title: 'Is there a minimum I need to draw?', content: <p>Sample answer text for the accordion.</p> },
]

const footerItems = [
  { id: 'harbour', title: 'Harbour Super', content: <p>Why Harbour, How we invest</p> },
  { id: 'members', title: 'Members', content: <p>Your super, Your retirement</p> },
]

export function SurfaceSamples() {
  return (
    <>
      <DevSection title="Cards and icon tiles">
        <Card as="article">
          <h3 className="text-h4">Card title</h3>
          <p>Cards are flat with a 1px border and no shadow.</p>
          <VisuallyHidden>This sentence is only for screen readers.</VisuallyHidden>
        </Card>
        <div className="flex flex-wrap items-center gap-3">
          <IconTile icon="wallet" size="small" />
          <IconTile icon="merge" size="medium" />
          <IconTile icon="sunrise" size="large" tone="sun" />
          <IconTile icon="calculator" size="xlarge" />
        </div>
      </DevSection>
      <DevSection title="Accordion">
        <Accordion items={faqItems} />
      </DevSection>
      <DevSection title="Accordion on dark (footer)" dark>
        <Accordion items={footerItems} tone="dark" />
      </DevSection>
    </>
  )
}
