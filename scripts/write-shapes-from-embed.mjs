import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { b64 as b04 } from './embed-04.mjs'
import { b64 as b05 } from './embed-05.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, 'b64')

fs.writeFileSync(path.join(dir, 'slide04-shape.txt'), b04)
fs.writeFileSync(path.join(dir, 'slide05-shape.txt'), b05)
console.log('slide04', b04.length, 'slide05', b05.length)
