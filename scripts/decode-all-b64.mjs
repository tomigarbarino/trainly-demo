import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const b64Dir = path.join(__dirname, 'b64')
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

if (!fs.existsSync(b64Dir)) {
  console.error('No scripts/b64 folder')
  process.exit(1)
}
fs.mkdirSync(outDir, { recursive: true })

for (const f of fs.readdirSync(b64Dir)) {
  if (!f.endsWith('.txt')) continue
  const name = f.replace(/\.txt$/, '')
  const b64 = fs.readFileSync(path.join(b64Dir, f), 'utf8').trim()
  if (!b64) continue
  fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(b64, 'base64'))
  console.log('Wrote', `${name}.png`)
}
