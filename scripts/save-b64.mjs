import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, 'b64')
const name = process.argv[2]
if (!name) {
  console.error('Usage: node save-b64.mjs <basename-without-txt>')
  process.exit(1)
}
const b64 = fs.readFileSync(0, 'utf8').trim()
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, `${name}.txt`), b64)
console.log('Wrote', `${name}.txt`)
