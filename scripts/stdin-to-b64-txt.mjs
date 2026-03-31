import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const [,, outName] = process.argv
if (!outName) {
  console.error('Usage: node stdin-to-b64-txt.mjs <nombre-sin-extension>')
  process.exit(1)
}
const raw = fs.readFileSync(0, 'utf8').trim()
fs.writeFileSync(path.join(__dirname, 'b64', `${outName}.txt`), raw)
console.log('Wrote', outName + '.txt', raw.length)
