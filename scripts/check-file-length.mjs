import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'

const folders = ['src', 'build-tools', 'scripts', 'tests']
const extensions = new Set(['.ts', '.tsx', '.js', '.mjs'])
const limit = 100

function listFiles(folder) {
  let entries
  try {
    entries = readdirSync(folder)
  } catch {
    return []
  }
  return entries.flatMap((name) => {
    const path = join(folder, name)
    if (statSync(path).isDirectory()) return name === 'generated' ? [] : listFiles(path)
    return extensions.has(extname(name)) ? [path] : []
  })
}

const tooLong = folders
  .flatMap(listFiles)
  .map((path) => ({ path, lines: readFileSync(path, 'utf8').replace(/\r?\n$/, '').split(/\r?\n/).length }))
  .filter(({ lines }) => lines >= limit)

if (tooLong.length > 0) {
  tooLong.forEach(({ path, lines }) => console.error(`${path}: ${lines} lines (limit is under ${limit})`))
  process.exit(1)
}
console.log(`check:lines passed: every script file is under ${limit} lines.`)
