// DaisyUI role → Harbour colour token
const daisyColors: Record<string, string> = {
  'base-100': 'white',
  'base-200': 'mist',
  'base-300': 'line',
  'base-content': 'ink',
  primary: 'teal-700',
  'primary-content': 'white',
  secondary: 'navy',
  'secondary-content': 'white',
  accent: 'sun',
  'accent-content': 'navy',
  neutral: 'ink',
  'neutral-content': 'white',
  info: 'lagoon-50',
  'info-content': 'teal-900',
  success: 'positive',
  'success-content': 'white',
  warning: 'sun-50',
  'warning-content': 'navy',
  error: 'negative',
  'error-content': 'white',
}

export function buildDaisyTheme() {
  const lines = [
    'name: "harbour";',
    'default: true;',
    'prefersdark: false;',
    'color-scheme: light;',
    ...Object.entries(daisyColors).map(([role, token]) => `--color-${role}: var(--hs-color-${token});`),
    '--radius-selector: var(--hs-radius-pill);',
    '--radius-field: var(--hs-radius-input);',
    '--radius-box: var(--hs-radius-card);',
    '--border: 1px;',
    '--depth: 0;',
    '--noise: 0;',
  ]
  return [
    '@plugin "daisyui" {\n  themes: false;\n}',
    `@plugin "daisyui/theme" {\n${lines.map((line) => `  ${line}`).join('\n')}\n}`,
  ].join('\n\n')
}
