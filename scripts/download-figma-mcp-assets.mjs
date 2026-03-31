/**
 * Descarga PNGs desde URLs temporales del MCP de Figma (get_design_context)
 * y los guarda en public/images/figma/<name>.png
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images', 'figma')

const assets = [
  ['slide01-logo', 'https://www.figma.com/api/mcp/asset/a28b8730-848f-45a9-9d45-9c22c260cd28'],
  ['slide02-group13', 'https://www.figma.com/api/mcp/asset/a2360ca3-3c86-45c2-82f7-529912ac6dfc'],
  ['slide02-group11', 'https://www.figma.com/api/mcp/asset/8edee9ce-2bf4-4ef6-95c1-efba479f8474'],
  ['slide02-group12', 'https://www.figma.com/api/mcp/asset/be8ddf45-c751-4d58-9666-7896c36853e6'],
  ['slide03-group19', 'https://www.figma.com/api/mcp/asset/a107fcd6-0252-4cf1-a034-77ed577c7ad9'],
  ['slide03-group20', 'https://www.figma.com/api/mcp/asset/edddd984-7ff4-4d21-82f5-9be7a16e201f'],
  // slide04-shape y slide05-shape: SVG en repo (no descargar como PNG)
  ['slide05-t-letter', 'https://www.figma.com/api/mcp/asset/7a0743b7-4d90-427b-ab99-73e5eae9b264'],
  ['slide07-capitulos', 'https://www.figma.com/api/mcp/asset/67f509b6-2700-494e-b713-e0d173cc9e9c'],
  ['slide07-flashcards', 'https://www.figma.com/api/mcp/asset/7e25073f-74d7-44aa-a5c3-b0b53aaa1167'],
  ['slide07-quizzes', 'https://www.figma.com/api/mcp/asset/b7e45f34-2457-4d51-aef1-0e8d015ec8d8'],
  ['slide07-evaluaciones', 'https://www.figma.com/api/mcp/asset/2d65238a-afe4-4827-9c72-c5270e2d01d6'],
  ['slide07-narracion', 'https://www.figma.com/api/mcp/asset/4c9a8722-ab18-4797-acbf-ecf58ed2662d'],
  ['slide08-check', 'https://www.figma.com/api/mcp/asset/012268d4-97f2-4506-b302-26951f7fbdc4'],
  ['slide09-vector', 'https://www.figma.com/api/mcp/asset/6a247b47-d05b-44e3-ab23-11ecdf8d9dba'],
  ['slide10-lab', 'https://www.figma.com/api/mcp/asset/8f4ebc26-a8cc-4462-bbf7-1ddcef050070'],
  ['slide10-scientist', 'https://www.figma.com/api/mcp/asset/f86a9251-26a5-40be-ab98-c8a91fb22482'],
  ['slide11-85', 'https://www.figma.com/api/mcp/asset/2526a937-5842-42d2-a373-3dc307bc785e'],
  ['slide11-check', 'https://www.figma.com/api/mcp/asset/995eeed1-55f2-464d-a3fe-3e41fd78a6e8'],
  ['slide12-logo', 'https://www.figma.com/api/mcp/asset/9bcfafd8-4d95-4ff6-8479-1ba38ea1f3ac'],
  ['slide12-shape', 'https://www.figma.com/api/mcp/asset/24e559eb-4663-44ad-8774-11b0002d507d'],
]

fs.mkdirSync(outDir, { recursive: true })

for (const [name, url] of assets) {
  const res = await fetch(url)
  if (!res.ok) {
    console.error('FAIL', name, res.status, res.statusText)
    process.exit(1)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const out = path.join(outDir, `${name}.png`)
  fs.writeFileSync(out, buf)
  console.log('Wrote', out, buf.length, 'bytes')
}
