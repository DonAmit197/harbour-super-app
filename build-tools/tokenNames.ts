// [utility name, JSON group, JSON key]
export const colorTokens = [
  ['navy', 'brand', 'navy'],
  ['teal', 'brand', 'teal'],
  ['teal-700', 'brand', 'teal-700'],
  ['teal-900', 'brand', 'teal-900'],
  ['lagoon', 'brand', 'lagoon'],
  ['lagoon-50', 'brand', 'lagoon-50'],
  ['sand', 'brand', 'sand'],
  ['sun', 'brand', 'sun'],
  ['sun-50', 'brand', 'sun-50'],
  ['ink', 'neutral', 'ink'],
  ['slate', 'neutral', 'slate'],
  ['line', 'neutral', 'border'],
  ['mist', 'neutral', 'mist'],
  ['white', 'neutral', 'white'],
  ['positive', 'status', 'positive'],
  ['positive-bg', 'status', 'positive-bg'],
  ['negative', 'status', 'negative'],
] as const

// JSON scale key → Tailwind text utility name
export const typeScaleNames: Record<string, string> = {
  'display-xl': 'display-xl',
  'display-l': 'display-l',
  'heading-h2': 'h2',
  'heading-h3': 'h3',
  'heading-h4': 'h4',
  'number-xl': 'number-xl',
  'body-l': 'body-l',
  'body-m': 'body-m',
  'body-m-strong': 'body-m-strong',
  'body-s': 'body-s',
  'body-s-strong': 'body-s-strong',
  'label-eyebrow': 'eyebrow',
  caption: 'caption',
  button: 'button',
}

export const radiusNames = ['input', 'tile', 'card', 'panel', 'pill'] as const

export const gradientNames = { banner: 'banner', heroWash: 'hero-wash' } as const

const typeProperties = ['family', 'weight', 'size', 'lineHeight', 'letterSpacing']

export const requiredTokens = [
  ...colorTokens.map(([, group, key]) => `color.${group}.${key}.value`),
  ...[0, 1, 2, 3].map((index) => `color.chart.series.${index}`),
  'color.chart.line',
  'color.chart.area.value',
  'color.chart.area.opacity',
  'color.chart.grid',
  ...Object.keys(gradientNames).flatMap((name) => [`color.gradient.${name}.angle`, `color.gradient.${name}.stops.1`]),
  'typography.fontFamilies.heading.family',
  'typography.fontFamilies.heading.fallback',
  'typography.fontFamilies.body.family',
  'typography.fontFamilies.body.fallback',
  ...Object.keys(typeScaleNames).flatMap((name) => typeProperties.map((prop) => `typography.scale.${name}.${prop}`)),
  ...radiusNames.map((name) => `radius.${name}`),
  'spacing.contentMaxWidth',
  'elevation.overlay',
]
