import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const [,, jsonPath, outName] = process.argv
if (!jsonPath || !outName) {
  console.error('Usage: node write-png-from-b64-parts.mjs <parts.json> <output-filename.png>')
  process.exit(1)
}
const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const parts = data.parts || [data.b64]
const b64 = parts.join('')
fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'figma', outName), Buffer.from(b64, 'base64'))
console.log('Wrote', outName, Buffer.from(b64, 'base64').length, 'bytes')
