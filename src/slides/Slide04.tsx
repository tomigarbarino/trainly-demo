const imgShape = '/images/figma/slide04-shape.svg'

export default function Slide04() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 593.2643486678727,
          height: 760,
        }}
      >
        <img alt="" className="absolute inset-0 size-full object-fill" src={imgShape} />
      </div>

      <div
        className="absolute flex flex-col items-start"
        style={{ left: 600, top: 282.5, width: 726 }}
      >
        <p className="font-poppins font-medium text-dark text-[24px] leading-none mb-2">
          Por ende...
        </p>
        <p className="font-poppins font-extrabold text-dark text-[40px] leading-none">
          La capacitación actual
        </p>
        <p className="font-poppins font-extrabold text-primary leading-none whitespace-nowrap" style={{ fontSize: 148, lineHeight: 1, width: 812 }}>
          no escala
        </p>
      </div>
    </div>
  )
}
