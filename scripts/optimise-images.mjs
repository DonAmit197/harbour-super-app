import { mkdirSync, statSync } from 'node:fs'
import { dirname } from 'node:path'
import sharp from 'sharp'

// [source, output, max width]
const photos = [
  ['assets/images/Hero.jpg', 'public/images/hero.jpg', 1920],
  ['assets/images/Hero.jpg', 'public/images/hero-mobile.jpg', 960],
  ['assets/images/Login-desktop.png', 'public/images/login.jpg', 720],
]

const kilobytes = (path) => `${Math.round(statSync(path).size / 1024)} KB`

export async function optimiseImages() {
  for (const [source, output, width] of photos) {
    mkdirSync(dirname(output), { recursive: true })
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .flatten()
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(output)
    console.log(`optimise-images: ${output} ${kilobytes(source)} → ${kilobytes(output)}`)
  }
}
