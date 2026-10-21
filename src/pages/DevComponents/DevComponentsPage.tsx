import { SkipLink } from '../../components/layout/SkipLink'
import { ButtonSamples } from './ButtonSamples'
import { FeedbackSamples } from './FeedbackSamples'
import { FieldSamples } from './FieldSamples'
import { SurfaceSamples } from './SurfaceSamples'

export function DevComponentsPage() {
  return (
    <>
      <SkipLink />
      <main id="main" tabIndex={-1} className="mx-auto flex max-w-content flex-col gap-8 px-4 py-12 lg:px-20">
        <h1 className="text-display-l">UI components</h1>
        <ButtonSamples />
        <FieldSamples />
        <FeedbackSamples />
        <SurfaceSamples />
      </main>
    </>
  )
}
