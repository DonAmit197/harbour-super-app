import type { ReactNode } from 'react'
import { colorSamples, radiusSamples, typeSamples } from './tokenSamples'

function TokenSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-h3">{title}</h2>
      {children}
    </section>
  )
}

export function ColorSwatches() {
  return (
    <TokenSection title="Colours">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {colorSamples.map(({ name, className }) => (
          <li key={name} className="flex flex-col gap-2">
            <span className={`h-16 rounded-tile border border-line ${className}`} aria-hidden="true" />
            <span className="text-body-s">{name}</span>
          </li>
        ))}
      </ul>
    </TokenSection>
  )
}

export function TypeScale() {
  return (
    <TokenSection title="Type scale">
      <ul className="flex flex-col gap-3">
        {typeSamples.map(({ name, className }) => (
          <li key={name} className="flex flex-col border-b border-line pb-3">
            <span className="text-caption text-slate">{name}</span>
            <span className={className}>Stable. Confident. Brighter together.</span>
          </li>
        ))}
      </ul>
    </TokenSection>
  )
}

export function RadiusSamples() {
  return (
    <TokenSection title="Radii, gradients and buttons">
      <ul className="flex flex-wrap gap-4">
        {radiusSamples.map(({ name, className }) => (
          <li key={name} className={`flex h-20 w-28 items-center justify-center bg-lagoon-50 ${className}`}>
            {name}
          </li>
        ))}
      </ul>
      <div className="h-20 rounded-panel bg-gradient-banner" aria-hidden="true" />
      <div className="h-20 rounded-panel border border-line bg-gradient-hero-wash" aria-hidden="true" />
      <div className="flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary">Primary (teal-700)</button>
        <button type="button" className="btn btn-secondary">Secondary (navy)</button>
        <button type="button" className="btn btn-accent">Accent (sun)</button>
      </div>
    </TokenSection>
  )
}
