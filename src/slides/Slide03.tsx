const imgGroup19 = 'https://www.figma.com/api/mcp/asset/9e6d4b91-d3c4-4d09-858d-a8bd5d82c586'
const imgGroup20 = 'https://www.figma.com/api/mcp/asset/8b0c4e1e-f1a0-49d4-adc8-69e8df0de90b'

export default function Slide03() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 1105 }}
      >
        Líderes sin visibilidad del aprendizaje
      </p>

      <div
        className="absolute flex flex-col gap-14 items-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 200 }}
      >
        <div className="flex flex-col gap-6 items-center">
          <p className="font-poppins font-bold text-dark text-[24px] leading-none text-center whitespace-nowrap">
            Hoy un líder no puede responder
          </p>
          <div className="flex flex-col gap-4 items-center">
            <QuestionPill img={imgGroup19} text="¿Quién completó la formación?" />
            <QuestionPill img={imgGroup19} text="¿Quién entendió realmente el contenido?" />
            <QuestionPill img={imgGroup19} text="¿Quién necesita refuerzo?" />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="font-poppins font-bold text-dark text-[36px] leading-none text-center">
            ¿El resultado?
          </p>
          <div className="bg-tertiary border-2 border-dark rounded-full flex gap-4 items-center pl-6 pr-8 py-4">
            <div className="relative shrink-0" style={{ width: 25, height: 25 }}>
              <img alt="" className="absolute w-full h-full object-contain" src={imgGroup20} />
            </div>
            <p className="font-poppins font-bold text-light text-[24px] leading-none whitespace-nowrap">
              Una capacitación que no se puede medir
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestionPill({ img, text }: { img: string; text: string }) {
  return (
    <div className="bg-bg01 border-2 border-dark rounded-full flex gap-4 items-center pl-6 pr-8 py-4">
      <div className="relative shrink-0" style={{ width: 25, height: 25 }}>
        <img alt="" className="absolute w-full h-full object-contain" src={img} />
      </div>
      <p className="font-poppins font-medium text-dark text-[24px] leading-none whitespace-nowrap">{text}</p>
    </div>
  )
}
