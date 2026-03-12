const imgCheck = 'https://www.figma.com/api/mcp/asset/f6fb6ad7-4049-47d8-b517-97b31710506e'

const features = [
  'Responde dudas sobre el manual.',
  'Ayuda a estudiar para exámenes.',
  'Explica conceptos complejos.',
  'Evalúa el conocimiento en tiempo real.',
]

export default function Slide08() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <div
        className="absolute flex flex-col gap-3 items-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 70 }}
      >
        <p className="font-poppins font-extrabold text-dark text-[48px] leading-none whitespace-nowrap">
          Un tutor disponible 24/7
        </p>
        <p className="font-poppins text-dark text-[20px] leading-none whitespace-nowrap">
          Cada empleado cuenta con un asistente personal basado en IA que...
        </p>
      </div>

      <div
        className="absolute flex flex-col gap-8"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 1125 }}
      >
        <div className="flex gap-4 items-center">
          <CheckPill text={features[0]} />
          <CheckPill text={features[1]} />
        </div>
        <div className="flex gap-4 items-center">
          <CheckPill text={features[2]} />
          <CheckPill text={features[3]} />
        </div>
      </div>
    </div>
  )
}

function CheckPill({ text }: { text: string }) {
  return (
    <div className="flex-1 bg-bg01 border-2 border-dark rounded-full flex gap-6 items-center px-8 py-6">
      <div className="relative shrink-0" style={{ width: 38, height: 38 }}>
        <img alt="" className="absolute w-full h-full object-contain" src={imgCheck} />
      </div>
      <p className="font-poppins font-semibold text-dark text-[24px] leading-none whitespace-nowrap">{text}</p>
    </div>
  )
}
