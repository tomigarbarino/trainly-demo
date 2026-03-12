// URLs frescas del último fetch del Figma
const imgCapitulos   = 'https://www.figma.com/api/mcp/asset/068ac85b-496e-40dc-bcc4-125685fd2e80'
const imgFlashcards  = 'https://www.figma.com/api/mcp/asset/b54564e5-fa7d-4313-ada4-85f7d511bf86'
const imgQuizzes     = 'https://www.figma.com/api/mcp/asset/50d22a99-d74a-4afe-83d1-8b188d1b7755'
const imgEvaluaciones = 'https://www.figma.com/api/mcp/asset/deea78a4-18f2-4751-a8f6-6f2fea3b430c'
const imgNarracion   = 'https://www.figma.com/api/mcp/asset/324f6162-db74-4bc5-8d5b-00b6463c2e50'

export default function Slide07() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, width: 949 }}
      >
        Aprendizaje diseñado para retener
      </p>

      {/* Container: centra las dos filas verticalmente dentro de 529px */}
      <div
        className="absolute flex flex-col gap-8 justify-center"
        style={{ left: 80, top: 128, width: 1190, height: 529 }}
      >
        {/* Fila superior — 3 cards de igual ancho, altura natural del contenido */}
        <div className="flex gap-8 items-stretch w-full shrink-0">
          <FeatureCard img={imgCapitulos}    title="Capítulos"             desc="Capitulación y segmentación del contenido cargado."     imgW={107} imgH={75} />
          <FeatureCard img={imgFlashcards}   title="Flashcards"            desc="Tarjetas diseñadas para recordar conceptos clave."       imgW={107} imgH={107} />
          <FeatureCard img={imgQuizzes}      title="Quizzes"               desc="Evaluaciones dinámicas basadas en el contenido."        imgW={95}  imgH={88} />
        </div>
        {/* Fila inferior — 2 cards más anchos, altura natural (menor que arriba) */}
        <div className="flex gap-8 items-stretch w-full shrink-0">
          <FeatureCard img={imgEvaluaciones} title="Evaluaciones en vivo"  desc="Un agente dedicado que valida los conocimientos."       imgW={90}  imgH={95} />
          <FeatureCard img={imgNarracion}    title="Narracion de contenido" desc="Repasá el contenido escuchandolo en cualquier lugar."  imgW={95}  imgH={79} />
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
}

function FeatureCard({ img, title, desc, imgW, imgH }: CardProps) {
  return (
    <div className="flex-1 bg-primary border-2 border-dark rounded-[24px] flex flex-col items-center justify-center px-8 pt-10 pb-12 relative overflow-hidden">
      {/* Icono decorativo centrado en el lado derecho del card */}
      <div
        className="absolute"
        style={{
          right: 32,
          top: '50%',
          transform: 'translateY(-50%)',
          width: imgW,
          height: imgH,
          opacity: 0.2,
        }}
      >
        <img alt="" className="w-full h-full object-contain" src={img} />
      </div>
      {/* Texto alineado a la izquierda */}
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
