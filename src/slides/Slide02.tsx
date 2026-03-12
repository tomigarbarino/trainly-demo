const imgGroup13 = 'https://www.figma.com/api/mcp/asset/49d9a1b7-c7e7-4f96-8da9-d96156cb9fba'
const imgGroup11 = 'https://www.figma.com/api/mcp/asset/b8400ba9-18d2-4985-baeb-24e097cfc435'
const imgGroup12 = 'https://www.figma.com/api/mcp/asset/a8fbf39f-8ddc-4d59-b680-15e8e7bd8b34'
const imgGroup20 = 'https://www.figma.com/api/mcp/asset/dd94958d-2db4-4817-b3e3-4e1dc61cf507'

export default function Slide02() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 788 }}
      >
        Capacitaciones empresariales basadas en documentos
      </p>

      {/* 3 document type cards */}
      <div
        className="absolute flex gap-8"
        style={{ left: 221.5, top: 212, width: 907 }}
      >
        {[
          { img: imgGroup13, label: 'Guías internas' },
          { img: imgGroup11, label: 'Manuales' },
          { img: imgGroup12, label: 'PDFs' },
        ].map(({ img, label }) => (
          <div
            key={label}
            className="flex-1 bg-bg01 border-2 border-dark rounded-[32px] flex flex-col items-center gap-8 px-16 py-8"
          >
            <div className="relative" style={{ width: 84, height: 105 }}>
              <img alt={label} className="absolute w-full h-full object-contain" src={img} />
            </div>
            <p className="font-poppins font-extrabold text-dark text-[20px] leading-none text-center whitespace-nowrap">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Problems section */}
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
