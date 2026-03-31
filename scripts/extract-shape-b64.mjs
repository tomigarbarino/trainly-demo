import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, 'b64')

for (const id of ['slide04', 'slide05']) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, `${id}-export.json`), 'utf8'))
  const b64 = j.b64
  if (!b64) {
    console.error('Sin b64:', id)
    process.exit(1)
  }
  fs.writeFileSync(path.join(dir, `${id}-shape.txt`), b64)
  console.log(`${id}-shape.txt`, b64.length, 'chars base64')
}
