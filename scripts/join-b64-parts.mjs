import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const partsDir = path.join(__dirname, 'b64', 'parts')
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

/**
 * Concatena slideNN-0.txt .. slideNN-(count-1).txt y escribe outName.png
 */
function join(prefix, count, outName) {
  let b64 = ''
  for (let i = 0; i < count; i++) {
    const p = path.join(partsDir, `${prefix}-${i}.txt`)
    b64 += fs.readFileSync(p, 'utf8').trim()
  }
  const buf = Buffer.from(b64, 'base64')
  if (buf[0] !== 0x89 || buf[1] !== 0x50) {
    console.error(outName, 'no parece PNG válido (magic bytes)')
    process.exit(1)
  }
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, outName), buf)
  console.log(outName, buf.length, 'bytes', 'b64 chars', b64.length)
}

const slide04 = process.argv.includes('--slide04')
const slide05 = process.argv.includes('--slide05')
if (!slide04 && !slide05) {
  join('slide04', 5, 'slide04-shape.png')
  join('slide05', 6, 'slide05-shape.png')
} else {
  if (slide04) join('slide04', 5, 'slide04-shape.png')
  if (slide05) join('slide05', 6, 'slide05-shape.png')
}
