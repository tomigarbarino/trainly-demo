const imgShape = 'https://www.figma.com/api/mcp/asset/0dec0365-8855-4b72-b0f3-2e35fbca6c89'
const imgTLetter = 'https://www.figma.com/api/mcp/asset/223616aa-dc36-43a2-b1d5-5d1e411069b3'

export default function Slide05() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-light">
      <div
        className="absolute bg-primary"
        style={{
          top: 0,
          bottom: 0,
          left: '69.31%',
          right: '-13.26%',
          WebkitMaskImage: `url(${imgShape})`,
          maskImage: `url(${imgShape})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      <div
        className="absolute flex flex-col gap-3 items-start"
        style={{ left: 80.03, top: 416, width: 812 }}
      >
        <div className="relative font-poppins font-extrabold text-dark" style={{ fontSize: 96 }}>
          <img
            alt=""
            className="absolute"
            style={{ left: 4.83, top: 13.93, width: 45.2, height: 68.1 }}
            src={imgTLetter}
          />
          <p className="m-0 leading-none" style={{ paddingLeft: 50 }}>
            ransformá tus
          </p>
          <p className="m-0 leading-none">
            documentos
          </p>
        </div>

        <div className="bg-primary rounded-full px-10 py-3">
          <p className="font-poppins font-medium text-light text-[24px] leading-relaxed whitespace-nowrap">
            En experiencias de aprendizaje
          </p>
        </div>
      </div>
    </div>
  )
}
