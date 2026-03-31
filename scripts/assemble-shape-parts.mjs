import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const b64Dir = path.join(__dirname, 'b64')
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

for (const slide of ['slide04', 'slide05']) {
  let b64 = ''
  for (let i = 0; i < 5; i++) {
    b64 += fs.readFileSync(path.join(b64Dir, `${slide}-p${i}.txt`), 'utf8').trim()
  }
  const buf = Buffer.from(b64, 'base64')
  if (buf.length < 100 || buf[0] !== 0x89 || buf[1] !== 0x50) {
    console.error('PNG inválido:', slide, buf.length)
    process.exit(1)
  }
  fs.writeFileSync(path.join(outDir, `${slide}-shape.png`), buf)
  console.log(`${slide}-shape.png`, buf.length, 'bytes')
}
