import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const [,, jsonPath, outName] = process.argv
if (!jsonPath || !outName) {
  console.error('Usage: node apply-figma-shape-parts.mjs <parts.json> <slideNN-shape.png>')
  process.exit(1)
}
const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const parts = data.parts
if (!Array.isArray(parts) || !parts.length) {
  console.error('Invalid parts')
  process.exit(1)
}
const b64 = parts.join('')
const buf = Buffer.from(b64, 'base64')
if (buf.length < 100 || buf[0] !== 0x89 || buf[1] !== 0x50) {
  console.error('PNG inválido', buf.length)
  process.exit(1)
}
const out = path.join(__dirname, '..', 'public', 'images', 'figma', outName)
fs.writeFileSync(out, buf)
console.log('Wrote', outName, buf.length, 'bytes')
