import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const b64Dir = path.join(__dirname, 'b64')
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

for (const name of ['slide04', 'slide05']) {
  const data = JSON.parse(fs.readFileSync(path.join(b64Dir, `${name}-export.json`), 'utf8'))
  const b64 = data.chunks.join('')
  const buf = Buffer.from(b64, 'base64')
  if (buf.length < 100 || buf[0] !== 0x89 || buf[1] !== 0x50) {
    console.error('PNG inválido:', name, buf.length)
    process.exit(1)
  }
  fs.writeFileSync(path.join(outDir, `${name}-shape.png`), buf)
  console.log(`${name}-shape.png`, buf.length, 'bytes')
}
