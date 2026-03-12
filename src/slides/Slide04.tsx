const imgShape = 'https://www.figma.com/api/mcp/asset/aef785a2-1ecd-4fe8-ba46-486784ec4cbb'

export default function Slide04() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      {/* Orange shape left */}
      <div
        className="absolute"
        style={{ left: -194, top: 0, width: 593, height: 760, transform: 'rotate(180deg)' }}
      >
        <img alt="" className="absolute w-full h-full" src={imgShape} />
      </div>

      {/* Text block */}
      <div
        className="absolute flex flex-col items-start"
        style={{ left: 488, top: '50%', transform: 'translateY(-50%)', width: 726 }}
      >
        <p className="font-poppins font-medium text-dark text-[24px] leading-none mb-2">
          Por ende...
        </p>
        <p className="font-poppins font-extrabold text-dark text-[40px] leading-none">
          La capacitación actual
        </p>
        <p className="font-poppins font-extrabold text-primary leading-none" style={{ fontSize: 148, lineHeight: 1 }}>
          no escala
        </p>
      </div>
    </div>
  )
}
