const imgLogo = '/images/figma/slide12-logo.svg'
const imgShape = '/images/figma/slide12-shape.svg'

export default function Slide12() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-primary">
      <div className="absolute" style={{ right: -179, top: 0, width: 593, height: 760 }}>
        <img alt="" className="absolute w-full h-full" src={imgShape} />
      </div>

      <div
        className="absolute flex flex-col gap-8 items-start"
        style={{ left: 110, top: '50%', transform: 'translateY(-50%)', width: 718 }}
      >
        <div className="relative" style={{ width: 529, height: 129 }}>
          <img alt="trainly" className="absolute w-full h-full object-contain" src={imgLogo} />
        </div>
        <div className="bg-light rounded-full px-10 py-3 w-full flex items-center justify-center">
          <p className="font-poppins text-dark text-[24px]">
            Transformá el conocimiento{' '}
            <span className="font-extrabold">en aprendizaje medible</span>
          </p>
        </div>
      </div>
    </div>
  )
}
