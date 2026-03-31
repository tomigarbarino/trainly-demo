import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')
const [,, name, b64Path] = process.argv
if (!name || !b64Path) {
  console.error('Usage: node write-png-from-b64.mjs <filename-without-ext> <path-to-b64-txt>')
  process.exit(1)
}
const b64 = fs.readFileSync(b64Path, 'utf8').trim()
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(b64, 'base64'))
console.log('OK', name + '.png')
