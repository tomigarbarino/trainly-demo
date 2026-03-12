import { useState, useEffect, useCallback } from 'react'
import PaginationDots from './components/PaginationDots'
import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import Slide03 from './slides/Slide03'
import Slide04 from './slides/Slide04'
import Slide05 from './slides/Slide05'
import Slide06 from './slides/Slide06'
import Slide07 from './slides/Slide07'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'

const SLIDES = [
  Slide01, Slide02, Slide03, Slide04,
  Slide05, Slide06, Slide07, Slide08,
  Slide09, Slide10, Slide11, Slide12,
]

// Slides with dark (orange) background need light dots
const DARK_BG_SLIDES = new Set([0, 11])

const SLIDE_W = 1350
const SLIDE_H = 760

function useScale() {
  const [scale, setScale] = useState(() =>
    Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H)
  )
  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H))
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return scale
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const scale = useScale()

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
    if (e.key === 'ArrowLeft') setCurrent(c => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const lightDots = DARK_BG_SLIDES.has(current)

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark">
      <div
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Todos los slides están en el DOM desde el inicio para que las imágenes
            se descarguen en background. Solo el activo es visible. */}
        {SLIDES.map((Slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <Slide />
          </div>
        ))}

        {/* Pagination dots overlay at the same position as in the Figma design */}
        <div
          style={{
            position: 'absolute',
            bottom: 25,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <PaginationDots
            total={SLIDES.length}
            current={current}
            onSelect={setCurrent}
            light={lightDots}
          />
        </div>
      </div>
    </div>
  )
}
