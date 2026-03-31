import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const b64Dir = path.join(__dirname, 'b64')

/** Pega aquí el campo b64 de use_figma (una sola línea, sin data: URL). */
const slide04B64 = process.env.SLIDE04_B64
const slide05B64 = process.env.SLIDE05_B64

if (!slide04B64 || !slide05B64) {
  console.error('Definí SLIDE04_B64 y SLIDE05_B64')
  process.exit(1)
}

fs.writeFileSync(path.join(b64Dir, 'slide04-shape.txt'), slide04B64.trim())
fs.writeFileSync(path.join(b64Dir, 'slide05-shape.txt'), slide05B64.trim())
console.log('OK', slide04B64.length, slide05B64.length)
