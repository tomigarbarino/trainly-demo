const imgCapitulos    = '/images/figma/slide07-capitulos.svg'
const imgFlashcards   = '/images/figma/slide07-flashcards.svg'
const imgQuizzes      = '/images/figma/slide07-quizzes.svg'
const imgEvaluaciones = '/images/figma/slide07-evaluaciones.svg'
const imgNarracion    = '/images/figma/slide07-narracion.svg'

export default function Slide07() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 949 }}
      >
        Aprendizaje diseñado para retener
      </p>

      <div
        className="absolute flex flex-col gap-8 justify-center"
        style={{ left: 80, top: 128, width: 1190, height: 529 }}
      >
        <div className="flex gap-8 items-stretch w-full shrink-0">
          <FeatureCard
            img={imgCapitulos}
            title="Capítulos"
            desc="Capitulación y segmentación del contenido cargado."
            imgW={107.032} imgH={75.497}
            imgOffsetX={104.66} imgOffsetY={0.57}
            cardWidth={375.33}
          />
          <FeatureCard
            img={imgFlashcards}
            title="Flashcards"
            desc="Tarjetas diseñadas para recordar conceptos clave."
            imgW={107.364} imgH={107.032}
            imgOffsetX={96.27} imgOffsetY={-1}
          />
          <FeatureCard
            img={imgQuizzes}
            title="Quizzes"
            desc="Evaluaciones dinámicas basadas en el contenido."
            imgW={95.452} imgH={87.537}
            imgLeft={236.51} imgTop={27.23}
          />
        </div>
        <div className="flex gap-8 items-stretch w-full shrink-0">
          <FeatureCard
            img={imgEvaluaciones}
            title="Evaluaciones en vivo"
            desc="Un agente dedicado que valida los conocimientos."
            imgW={90.336} imgH={94.575}
            imgOffsetX={221.08} imgOffsetY={-0.5}
          />
          <FeatureCard
            img={imgNarracion}
            title="Narración de contenido"
            desc="Repasá el contenido escuchándolo en cualquier lugar."
            imgW={94.597} imgH={78.836}
            imgOffsetX={202.56} imgOffsetY={-1.56}
          />
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  img: string
  title: string
  desc: string
  imgW: number
  imgH: number
  imgOffsetX?: number
  imgOffsetY?: number
  imgLeft?: number
  imgTop?: number
  cardWidth?: number
}

function FeatureCard({ img, title, desc, imgW, imgH, imgOffsetX, imgOffsetY, imgLeft, imgTop, cardWidth }: CardProps) {
  const useCenteredPos = imgOffsetX !== undefined

  const imgStyle: React.CSSProperties = useCenteredPos
    ? {
        position: 'absolute',
        left: `calc(50% + ${imgOffsetX}px)`,
        top: `calc(50% + ${imgOffsetY ?? 0}px)`,
        transform: 'translate(-50%, -50%)',
        width: imgW,
        height: imgH,
      }
    : {
        position: 'absolute',
        left: imgLeft,
        top: imgTop,
        width: imgW,
        height: imgH,
      }

  return (
    <div
      className="bg-primary border-2 border-dark rounded-[24px] flex flex-col gap-3 items-start justify-center px-8 pt-10 pb-12 relative overflow-hidden"
      style={cardWidth ? { width: cardWidth, flexShrink: 0 } : { flex: '1 0 0', minWidth: 0 }}
    >
      <div style={imgStyle}>
        <img alt="" className="absolute block max-w-none w-full h-full" src={img} />
      </div>
      <div className="flex flex-col gap-3 items-start justify-center w-full relative">
        <p className="font-poppins font-extrabold text-light text-[32px] leading-none whitespace-nowrap">
          {title}
        </p>
        <p className="font-poppins font-medium text-light text-[15px] leading-snug">
          {desc}
        </p>
      </div>
    </div>
  )
}
