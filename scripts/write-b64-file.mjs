import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, 'b64')
const name = process.argv[2]
const src = process.argv[3]
if (!name || !src) {
  console.error('Usage: node write-b64-file.mjs <basename> <source-txt-path>')
  process.exit(1)
}
fs.mkdirSync(outDir, { recursive: true })
const b64 = fs.readFileSync(src, 'utf8').trim()
fs.writeFileSync(path.join(outDir, `${name}.txt`), b64)
console.log('OK', name)
