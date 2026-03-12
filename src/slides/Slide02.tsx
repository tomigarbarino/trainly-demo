const imgGroup13 = 'https://www.figma.com/api/mcp/asset/efe90653-480d-4273-baae-e5537f3650d5'
const imgGroup11 = 'https://www.figma.com/api/mcp/asset/837747c0-3f7e-45f1-b374-6092c3ca1b0d'
const imgGroup12 = 'https://www.figma.com/api/mcp/asset/0f7f4c72-8fde-42c8-ba9f-d33e42c2fd29'
const imgGroup20 = 'https://www.figma.com/api/mcp/asset/00e012b5-e288-425d-9da7-bd84cffcbbfd'

const docCards = [
  { img: imgGroup13, label: 'Guías internas', imgW: 102.054, imgH: 104.471 },
  { img: imgGroup11, label: 'Manuales',       imgW: 115.995, imgH: 104.715 },
  { img: imgGroup12, label: 'PDFs',           imgW: 84.342,  imgH: 104.715 },
]

export default function Slide02() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 788 }}
      >
        Capacitaciones empresariales basadas en documentos
      </p>

      <div
        className="absolute flex gap-8"
        style={{ left: 221.5, top: 212, width: 907 }}
      >
        {docCards.map(({ img, label, imgW, imgH }) => (
          <div
            key={label}
            className="flex-1 bg-bg01 border-2 border-dark rounded-[32px] flex flex-col items-center gap-8 px-16 py-8"
          >
            <div className="relative shrink-0" style={{ width: imgW, height: imgH }}>
              <img alt={label} className="absolute block max-w-none w-full h-full" src={img} />
            </div>
            <p className="font-poppins font-extrabold text-dark text-[20px] leading-none text-center whitespace-nowrap">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="absolute flex flex-col gap-6 items-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 470 }}
      >
        <p className="font-poppins font-bold text-dark text-[24px] leading-none text-center whitespace-nowrap">
          Por lo que los empleados se enfrentan a...
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Pill img={imgGroup20} text="Contenido poco didáctico e interactivo" />
          <div className="flex gap-6">
            <Pill img={imgGroup20} text="Baja retención." />
            <Pill img={imgGroup20} text="Documentos largos y extensos" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Pill({ img, text }: { img: string; text: string }) {
  return (
    <div className="bg-bg01 border-2 border-dark rounded-full flex gap-4 items-center pl-6 pr-8 py-4">
      <div className="relative shrink-0" style={{ width: 25, height: 25 }}>
        <img alt="" className="absolute w-full h-full object-contain" src={img} />
      </div>
      <p className="font-poppins font-medium text-dark text-[24px] leading-none whitespace-nowrap">{text}</p>
    </div>
  )
}
