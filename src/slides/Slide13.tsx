const blocks = [
  { icon: '📄', title: 'NotebookLM', desc: 'entender documentos', highlight: false },
  { icon: '⚙️', title: 'Coursebox / Mindsmith', desc: 'generar cursos', highlight: false },
  { icon: '🧱', title: 'LMS (Sana, Docebo)', desc: 'gestionar cursos', highlight: false },
  {
    icon: '🚀',
    title: 'Trainly',
    desc: 'transformar conocimiento en aprendizaje medible',
    highlight: true,
  },
] as const

export default function Slide13() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80, maxWidth: 950 }}
      >
        No somos otra herramienta más
      </p>

      <div
        className="absolute flex gap-8 items-stretch"
        style={{ left: 80, top: 178, width: 1190, height: 310 }}
      >
        {blocks.map(({ icon, title, desc, highlight }) =>
          highlight ? (
            <div
              key={title}
              className="flex-1 min-w-0 h-full bg-primary border-2 border-dark rounded-[24px] flex flex-col gap-2 items-center justify-center px-6 py-8"
            >
              <span className="text-[28px] leading-none select-none" aria-hidden>
                {icon}
              </span>
              <p className="font-poppins font-extrabold text-light text-[32px] leading-none text-center">
                {title}
              </p>
              <p className="font-poppins font-medium text-light text-[15px] leading-snug text-center">
                {desc}
              </p>
            </div>
          ) : (
            <div
              key={title}
              className="flex-1 min-w-0 h-full bg-bg01 border-2 border-dark rounded-[24px] flex flex-col gap-2 items-center justify-center px-6 py-8"
            >
              <span
                className="text-[28px] leading-none select-none opacity-80"
                aria-hidden
              >
                {icon}
              </span>
              <p className="font-poppins font-extrabold text-[24px] leading-tight text-center text-dark/72">
                {title}
              </p>
              <p className="font-poppins text-[15px] leading-snug text-center text-dark/65">
                {desc}
              </p>
            </div>
          )
        )}
      </div>

      <div
        className="absolute bg-primary border-2 border-dark rounded-full flex flex-col items-center justify-center gap-1 px-10 py-5 text-center"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 532, maxWidth: 1120 }}
      >
        <p className="font-poppins font-medium text-light text-[22px] leading-snug">
          Las otras herramientas trabajan el contenido.
        </p>
        <p className="font-poppins font-extrabold text-light text-[22px] leading-snug">
          Trainly entrena al equipo.
        </p>
      </div>
    </div>
  )
}
