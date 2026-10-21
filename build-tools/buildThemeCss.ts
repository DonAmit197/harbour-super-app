import type { StyleGuide } from './readStyleGuide'
import { colorTokens, gradientNames, radiusNames, typeScaleNames } from './tokenNames'
import { buildDaisyTheme } from './buildDaisyTheme'

const rem = (px: number) => `${px / 16}rem`
const block = (selector: string, lines: string[]) => `${selector} {\n${lines.map((line) => `  ${line}`).join('\n')}\n}`

function fontStack({ family, fallback }: { family: string; fallback: string }) {
  return `"${family}", ${fallback}`
}

function buildRootVariables(guide: StyleGuide) {
  const { color, typography } = guide
  const chart = color.chart
  return [
    ...colorTokens.map(([name, group, key]) => `--hs-color-${name}: ${color[group][key].value};`),
    `--hs-font-heading: ${fontStack(typography.fontFamilies.heading)};`,
    `--hs-font-body: ${fontStack(typography.fontFamilies.body)};`,
    ...radiusNames.map((name) => `--hs-radius-${name}: ${guide.radius[name]}px;`),
    `--hs-content-max-width: ${guide.spacing.contentMaxWidth}px;`,
    `--hs-shadow-overlay: ${guide.elevation.overlay};`,
    `--hs-border-strong: ${guide.border.width.input}px;`,
    `--hs-border-dashed: ${guide.border.embedPlaceholder.width}px;`,
    ...chart.series.slice(0, 4).map((value, index) => `--hs-chart-${index + 1}: ${value};`),
    `--hs-chart-line: ${chart.line};`,
    `--hs-chart-area: ${chart.area.value};`,
    `--hs-chart-area-opacity: ${chart.area.opacity};`,
    `--hs-chart-grid: ${chart.grid};`,
    ...Object.entries(gradientNames).map(([key, name]) => {
      const { angle, stops } = color.gradient[key]
      return `--hs-gradient-${name}: linear-gradient(${angle}, ${stops.join(', ')});`
    }),
  ]
}

function buildTypeScale(guide: StyleGuide) {
  return Object.entries(typeScaleNames).flatMap(([key, name]) => {
    const style = guide.typography.scale[key]
    return [
      `--text-${name}: ${rem(style.size)};`,
      `--text-${name}--line-height: ${rem(style.lineHeight)};`,
      `--text-${name}--letter-spacing: ${style.letterSpacing === '0' ? '0em' : style.letterSpacing};`,
      `--text-${name}--font-weight: ${style.weight};`,
    ]
  })
}

function buildTailwindTheme(guide: StyleGuide) {
  return block('@theme', [
    '--color-*: initial;',
    ...colorTokens.map(([name]) => `--color-${name}: var(--hs-color-${name});`),
    '--font-heading: var(--hs-font-heading);',
    '--font-sans: var(--hs-font-body);',
    '--text-*: initial;',
    ...buildTypeScale(guide),
    '--radius-*: initial;',
    ...radiusNames.map((name) => `--radius-${name}: var(--hs-radius-${name});`),
    '--container-content: var(--hs-content-max-width);',
    '--shadow-overlay: var(--hs-shadow-overlay);',
  ])
}

function buildUtilities() {
  return [
    ...Object.values(gradientNames).map((name) =>
      block(`@utility bg-gradient-${name}`, [`background-image: var(--hs-gradient-${name});`]),
    ),
    block('@utility border-strong', ['border-width: var(--hs-border-strong);']),
    block('@utility border-dashed-slot', ['border-width: var(--hs-border-dashed);', 'border-style: dashed;']),
  ]
}

export function buildThemeCss(guide: StyleGuide) {
  const sections = [
    '/* Generated from assets/harbour-super-styleguide.json by build-tools/harbourThemePlugin.ts. Do not edit. */',
    block(':root', buildRootVariables(guide)),
    buildTailwindTheme(guide),
    ...buildUtilities(),
    buildDaisyTheme(),
  ]
  return `${sections.join('\n\n')}\n`
}
