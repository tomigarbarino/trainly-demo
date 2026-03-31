import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const jsonPath = path.join(__dirname, 'figma-batch.json')
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
fs.mkdirSync(outDir, { recursive: true })

for (const [name, b64] of Object.entries(data)) {
  if (typeof b64 !== 'string' || !b64.length) {
    console.error('Skip invalid:', name)
    continue
  }
  fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(b64, 'base64'))
  console.log('Wrote', name + '.png')
}
