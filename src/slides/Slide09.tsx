const imgVector = 'https://www.figma.com/api/mcp/asset/36a14ead-1859-4edc-a869-aca7e6fc882d'

const metrics = [
  { label: 'Progreso del usuario', value: 'Seguimiento real del avance' },
  { label: 'Nivel de retención', value: 'Identificar áreas de refuerzo' },
  { label: 'Tiempo de aprendizaje', value: 'Optimización del tiempo laboral' },
  { label: 'Certificaciones', value: 'Validación oficial de competencias' },
]

export default function Slide09() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center whitespace-nowrap"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80 }}
      >
        Aprendizaje medible
      </p>

      <div
        className="absolute flex flex-col gap-8 items-center justify-center"
        style={{ left: 112, top: 121, width: 1125, height: 529 }}
      >
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="bg-bg01 border-2 border-dark rounded-full flex gap-6 items-center px-8 py-6"
          >
            <p className="font-poppins font-medium text-dark text-[24px] leading-none whitespace-nowrap">{label}</p>
            <div className="shrink-0 flex items-center justify-center relative" style={{ width: 28.337, height: 22.782 }}>
              <div style={{ transform: 'rotate(90deg)', width: 22.782, height: 28.337, flexShrink: 0 }}>
                <div className="absolute" style={{ inset: '-1px' }}>
                  <img alt="" className="block max-w-none w-full h-full" src={imgVector} />
                </div>
              </div>
            </div>
            <p className="font-poppins font-bold text-dark text-[24px] leading-none whitespace-nowrap">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
