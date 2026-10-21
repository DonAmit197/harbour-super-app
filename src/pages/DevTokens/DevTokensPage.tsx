import { ColorSwatches, RadiusSamples, TypeScale } from './TokenSections'

export function DevTokensPage() {
  return (
    <main id="main" className="mx-auto flex max-w-content flex-col gap-12 px-4 py-12 lg:px-20">
      <h1 className="text-display-l">Design tokens</h1>
      <ColorSwatches />
      <TypeScale />
      <RadiusSamples />
    </main>
  )
}
