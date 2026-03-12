// URLs frescas del último fetch del Figma
const imgSubir      = 'https://www.figma.com/api/mcp/asset/8c602b9e-66ee-4e49-b882-414fdc0d0513'
const imgProcesar   = 'https://www.figma.com/api/mcp/asset/7855b5fd-7892-4370-9f35-b5194b35fabf'
const imgCrear      = 'https://www.figma.com/api/mcp/asset/6bd0659f-8870-4530-af40-fd12c5990b1b'
const imgAprendizaje = 'https://www.figma.com/api/mcp/asset/10b6ef83-89e1-4e5f-913a-7987b01570b3'
// El vector flecha: la imagen es vertical (portrait) y se rota 90° para apuntar →
const imgArrow      = 'https://www.figma.com/api/mcp/asset/1591075d-ccfa-40cd-b22c-c7a63063e70e'

const steps = [
  { img: imgSubir,       title: 'Subir',        desc: 'Carga tus archivos PDF o manuales.' },
  { img: imgProcesar,    title: 'Procesar',      desc: 'La IA analiza y estructura el contenido.' },
  { img: imgCrear,       title: 'Crear',         desc: 'Generación automática de lecciones.' },
  { img: imgAprendizaje, title: 'Aprendizaje',   desc: 'Experiencia lista para el empleado.' },
]

// Posiciones X exactas del Figma para cada flecha (left del div contenedor)
// Las flechas se superponen en el hueco entre cards y se centran verticalmente
// en top: calc(50%+76px) con translateY(-50%)
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

      {/* Container: 4 cards en flex row + flechas absolutas superpuestas */}
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
        {/* 4 cards — cada uno flex-1, ocupan todo el ancho disponible */}
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

        {/* Flechas: absolutas dentro del container, en los huecos entre cards.
            La imagen original es VERTICAL (portrait 43×54). rotate-90 la hace apuntar →.
            top: calc(50%+76px) con translateY(-50%) = 76px bajo el centro vertical del container */}
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
            {/* rotate-90 convierte el vector vertical en flecha horizontal apuntando → */}
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
