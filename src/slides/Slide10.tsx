const imgLabIcon = '/images/figma/slide10-lab.svg'
const imgScientist = '/images/figma/slide10-scientist.svg'

export default function Slide10() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <div
        className="absolute bg-tertiary border-2 border-dark rounded-full flex gap-2 items-center pl-[22px] pr-6 py-3"
        style={{ right: 44, top: 36 }}
      >
        <div className="relative shrink-0" style={{ width: 13, height: 16 }}>
          <img alt="" className="absolute w-full h-full object-contain" src={imgLabIcon} />
        </div>
        <p className="font-poppins font-bold text-light text-[20px] leading-none">in lab</p>
      </div>

      <p
        className="absolute font-poppins font-extrabold text-dark text-[48px] leading-none text-center whitespace-nowrap"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 80 }}
      >
        Aprendizaje inmersivo
      </p>

      <p
        className="absolute font-poppins font-medium text-dark text-[24px] leading-none whitespace-nowrap"
        style={{ left: 272, top: 146 }}
      >
        Estudiá en entornos virtuales y explorá contenido sin distracciones
      </p>

      <div
        className="absolute"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 214, width: 378, height: 381 }}
      >
        <img alt="Aprendizaje inmersivo" className="absolute w-full h-full object-contain" src={imgScientist} />
      </div>

      <div
        className="absolute bg-primary border-2 border-dark rounded-full flex items-center justify-center px-10 py-4"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 580 }}
      >
        <p className="font-poppins font-bold text-light text-[32px] leading-none whitespace-nowrap">
          Mayor engagement y retención garantizada
        </p>
      </div>
    </div>
  )
}
