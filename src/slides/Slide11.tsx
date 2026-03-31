const img85 = '/images/figma/slide11-85.svg'
const imgCheck = '/images/figma/slide11-check.svg'

export default function Slide11() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center whitespace-nowrap"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80 }}
      >
        Motivación que impulsa resultados
      </p>

      <div
        className="absolute flex flex-col gap-10 items-center"
        style={{ left: 202, top: 178, width: 947 }}
      >
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="relative" style={{ width: 566, height: 235 }}>
            <img alt="85%" className="absolute w-full h-full object-contain" src={img85} />
          </div>
          <p className="font-poppins font-medium text-dark text-[32px] leading-none text-center whitespace-nowrap">
            Más adherencia al aprendizaje usando tecnicas como:
          </p>
        </div>

        <div className="flex flex-col gap-[18px] items-center w-full">
          <CheckPill text="Sistema de recompensas por objetivos cumplidos." />
          <div className="flex gap-6 items-center">
            <CheckPill text="Insignias y logros por maestría." />
            <CheckPill text="Niveles y progreso visual." />
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckPill({ text }: { text: string }) {
  return (
    <div className="bg-bg01 border-2 border-dark rounded-full flex gap-4 items-center pl-6 pr-8 py-4">
      <div className="relative shrink-0" style={{ width: 25, height: 25 }}>
        <img alt="" className="absolute w-full h-full object-contain" src={imgCheck} />
      </div>
      <p className="font-poppins font-medium text-dark text-[24px] leading-none whitespace-nowrap">{text}</p>
    </div>
  )
}
