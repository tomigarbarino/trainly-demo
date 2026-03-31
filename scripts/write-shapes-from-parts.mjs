import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const raw = fs.readFileSync(path.join(__dirname, 'b64', 'shapes-parts.json'), 'utf8')
const data = JSON.parse(raw)
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

for (const key of ['slide04', 'slide05']) {
  const parts = data[key].parts
  const b64 = parts.join('')
  const buf = Buffer.from(b64, 'base64')
  if (buf.length < 100 || buf[0] !== 0x89 || buf[1] !== 0x50) {
    console.error('PNG inválido', key, buf.length)
    process.exit(1)
  }
  const name = `${key}-shape.png`
  fs.writeFileSync(path.join(outDir, name), buf)
  console.log('Wrote', name, buf.length, 'bytes (expected', data[key].byteLen + ')')
}
