const imgSubir       = '/images/figma/slide06-subir.svg'
const imgProcesar    = '/images/figma/slide06-procesar.svg'
const imgCrear       = '/images/figma/slide06-crear.svg'
const imgAprendizaje = '/images/figma/slide06-aprendizaje.svg'
const imgArrow       = '/images/figma/slide06-arrow.svg'

const steps = [
  { img: imgSubir,       title: 'Subir',        desc: 'Carga tus archivos PDF o manuales.' },
  { img: imgProcesar,    title: 'Procesar',      desc: 'La IA analiza y estructura el contenido.' },
  { img: imgCrear,       title: 'Crear',         desc: 'Generación automática de lecciones.' },
  { img: imgAprendizaje, title: 'Aprendizaje',   desc: 'Experiencia lista para el empleado.' },
]

const ARROW_POSITIONS = [260.86, 567.98, 875.1]

export default function Slide06() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 949 }}
      >
        De PDF a curso interactivo en minutos
      </p>

      <div
        className="absolute flex gap-8 items-center"
        style={{
          left: 80,
          top: '50%',
          transform: 'translateY(-50%) translateY(28px)',
          width: 1190,
          height: 352,
        }}
      >
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex-1 h-full bg-bg01 border-2 border-dark rounded-[24px] flex flex-col gap-10 items-center justify-center px-8 py-10"
          >
            <div className="relative shrink-0" style={{ width: 150, height: 151 }}>
              <img alt={step.title} className="absolute w-full h-full object-contain" src={step.img} />
            </div>
            <div className="flex flex-col gap-3 items-center text-center text-dark w-full">
              <p className="font-poppins font-extrabold text-[24px] leading-none whitespace-nowrap">
                {step.title}
              </p>
              <p className="font-poppins text-[15px] leading-snug">{step.desc}</p>
            </div>
          </div>
        ))}

        {ARROW_POSITIONS.map((leftPx) => (
          <div
            key={leftPx}
            className="absolute flex items-center justify-center"
            style={{
              left: leftPx,
              top: 'calc(50% + 76px)',
              transform: 'translateY(-50%)',
              width: 54.042,
              height: 43.448,
            }}
          >
            <div style={{ transform: 'rotate(90deg)', width: 43.448, height: 54.042, flexShrink: 0 }}>
              <img
                alt=""
                className="block w-full h-full"
                src={imgArrow}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
