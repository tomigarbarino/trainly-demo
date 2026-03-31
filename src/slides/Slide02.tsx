const imgGroup13 = '/images/figma/slide02-group13.svg'
const imgGroup11 = '/images/figma/slide02-group11.svg'
const imgGroup12 = '/images/figma/slide02-group12.svg'
const imgGroup20 = '/images/figma/slide02-group20.png'

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
