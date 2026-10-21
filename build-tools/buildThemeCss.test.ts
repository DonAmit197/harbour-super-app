// @vitest-environment node
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { buildThemeCss } from './buildThemeCss'
import { readStyleGuide, validateStyleGuide } from './readStyleGuide'
import { colorTokens, radiusNames, typeScaleNames } from './tokenNames'

const styleGuidePath = 'assets/harbour-super-styleguide.json'
const css = buildThemeCss(readStyleGuide(styleGuidePath))

describe('buildThemeCss', () => {
  it('maps every colour token to a root variable and a Tailwind colour', () => {
    colorTokens.forEach(([name]) => {
      expect(css).toContain(`--hs-color-${name}:`)
      expect(css).toContain(`--color-${name}: var(--hs-color-${name});`)
    })
    expect(css).toContain('--hs-color-teal-700: #0E6E74;')
  })

  it('builds the type scale with line height, letter spacing and weight', () => {
    Object.values(typeScaleNames).forEach((name) => {
      expect(css).toContain(`--text-${name}:`)
      expect(css).toContain(`--text-${name}--line-height:`)
      expect(css).toContain(`--text-${name}--letter-spacing:`)
      expect(css).toContain(`--text-${name}--font-weight:`)
    })
    expect(css).toContain('--text-display-xl: 3.5rem;')
  })

  it('builds fonts, radii, content width, chart colours and the DaisyUI theme', () => {
    expect(css).toContain('--font-heading: var(--hs-font-heading);')
    expect(css).toContain('--font-sans: var(--hs-font-body);')
    radiusNames.forEach((name) => expect(css).toContain(`--radius-${name}: var(--hs-radius-${name});`))
    expect(css).toContain('--container-content: var(--hs-content-max-width);')
    ;[1, 2, 3, 4].forEach((index) => expect(css).toContain(`--hs-chart-${index}:`))
    expect(css).toContain('name: "harbour";')
    expect(css).toContain('--color-primary: var(--hs-color-teal-700);')
  })

  it('fails clearly when a required token is missing', () => {
    const guide = JSON.parse(readFileSync(styleGuidePath, 'utf8'))
    delete guide.color.brand['teal-700']
    delete guide.radius.card
    expect(() => validateStyleGuide(guide, 'test.json')).toThrow(
      /missing 2 required token\(s\):\n {2}- color\.brand\.teal-700\.value\n {2}- radius\.card/,
    )
  })
})
