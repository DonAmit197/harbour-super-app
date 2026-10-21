import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import type { Plugin } from 'vite'
import { readStyleGuide } from './readStyleGuide'
import { buildThemeCss } from './buildThemeCss'

type HarbourThemeOptions = { styleGuide?: string; output?: string }

export function harbourThemePlugin(options: HarbourThemeOptions = {}): Plugin {
  let root = process.cwd()
  const sourcePath = () => resolve(root, options.styleGuide ?? 'assets/harbour-super-styleguide.json')
  const outputPath = () => resolve(root, options.output ?? 'src/styles/generated/theme.css')

  // Returns true when theme.css changed on disk.
  function generate() {
    const css = buildThemeCss(readStyleGuide(sourcePath()))
    const output = outputPath()
    if (existsSync(output) && readFileSync(output, 'utf8') === css) return false
    mkdirSync(dirname(output), { recursive: true })
    writeFileSync(output, css)
    return true
  }

  return {
    name: 'harbour-theme',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
      generate()
    },
    configureServer(server) {
      const source = sourcePath()
      server.watcher.add(source)
      server.watcher.on('change', (file) => {
        if (resolve(file) !== source) return
        try {
          if (!generate()) return
          server.config.logger.info('harbour-theme: theme.css regenerated from the style guide')
          server.ws.send({ type: 'full-reload' })
        } catch (error) {
          server.config.logger.error(error instanceof Error ? error.message : String(error))
        }
      })
    },
  }
}
