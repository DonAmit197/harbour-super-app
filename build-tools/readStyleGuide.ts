import { readFileSync } from 'node:fs'
import { requiredTokens } from './tokenNames'

type ColorToken = { value: string }
type Gradient = { angle: string; stops: string[] }

export type TypeStyle = {
  family: 'heading' | 'body'
  weight: number
  size: number
  lineHeight: number
  letterSpacing: string
}

export type StyleGuide = {
  color: {
    brand: Record<string, ColorToken>
    neutral: Record<string, ColorToken>
    status: Record<string, ColorToken>
    chart: { series: string[]; line: string; area: { value: string; opacity: number }; grid: string }
    gradient: Record<string, Gradient>
  }
  typography: {
    fontFamilies: Record<'heading' | 'body', { family: string; fallback: string }>
    scale: Record<string, TypeStyle>
  }
  spacing: { contentMaxWidth: number }
  radius: Record<string, number>
  elevation: { overlay: string }
  border: { width: { input: number }; embedPlaceholder: { width: number } }
  breakpoints: { tailwind: Record<string, number> }
}

function getToken(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((node, key) => {
    return node !== null && typeof node === 'object' ? (node as Record<string, unknown>)[key] : undefined
  }, source)
}

export function validateStyleGuide(source: unknown, fileLabel: string): StyleGuide {
  const missing = requiredTokens.filter((path) => getToken(source, path) === undefined)
  if (missing.length > 0) {
    const list = missing.map((path) => `  - ${path}`).join('\n')
    throw new Error(`Harbour style guide ${fileLabel} is missing ${missing.length} required token(s):\n${list}`)
  }
  return source as StyleGuide
}

export function readStyleGuide(path: string): StyleGuide {
  return validateStyleGuide(JSON.parse(readFileSync(path, 'utf8')), path)
}
