const logo = '/images/figma/slide01-logo.svg'

export default function Slide01() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-primary">
      <div className="absolute" style={{ left: 510.91, top: 345.98, width: 328.18, height: 80.05 }}>
        <img alt="trainly" className="w-full h-full object-contain" src={logo} />
      </div>
    </div>
  )
}
