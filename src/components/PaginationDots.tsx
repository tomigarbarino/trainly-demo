interface Props {
  total: number
  current: number
  onSelect: (index: number) => void
  light?: boolean
}

export default function PaginationDots({ total, current, onSelect, light = false }: Props) {
  return (
    <div className="flex items-center gap-[12px]">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Ir a slide ${i + 1}`}
          style={{
            width: i === current ? '9.5px' : '6.8px',
            height: i === current ? '9.5px' : '6.8px',
            borderRadius: '50%',
            backgroundColor: i === current
              ? (light ? '#FFF8ED' : '#242520')
              : (light ? 'rgba(255,248,237,0.5)' : 'rgba(36,37,32,0.3)'),
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}
