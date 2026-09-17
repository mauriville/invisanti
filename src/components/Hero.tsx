import { useEffect, useRef } from 'react'
import { PartyPopper } from 'lucide-react'
import {
  Apple,
  Grapes,
  Lemon,
  Orange,
  OrangeSlice,
  Pear,
  Sprinkles,
  Squiggle,
  Strawberry,
  WaveDivider,
  Watermelon,
} from './Fruits'

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    const hero = heroRef.current
    if (!scene || !hero) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const top = scene.getBoundingClientRect().top
      const pin = scene.offsetHeight - hero.offsetHeight
      const progress = pin > 0 ? Math.min(1, Math.max(0, -top / pin)) : 0
      hero.style.setProperty('--sp', progress.toFixed(4))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-scene" ref={sceneRef}>
      <header className="hero" ref={heroRef}>
      <Sprinkles className="hero-sprinkles" />
      <Strawberry className="float f-01" width={76} height={76} pose={{ arms: 'up', mouth: 'cheer' }} />
      <Watermelon className="float f-02" width={86} height={86} pose={{ arms: 'down', mood: 'happy' }} />
      <Orange className="float f-03" width={64} height={64} pose={{ arms: 'wave' }} />
      <Pear className="float f-04" width={62} height={62} pose={{ arms: 'shy', mood: 'wink' }} />
      <Lemon className="float f-05" width={68} height={68} pose={{ arms: 'down', mouth: 'soft' }} />
      <Grapes className="float f-06" width={64} height={64} pose={{ arms: 'up', mood: 'happy' }} />
      <Strawberry className="float f-07" width={56} height={56} pose={{ arms: 'wave', mood: 'wink' }} />
      <Apple className="float f-08" width={58} height={58} pose={{ arms: 'up', mouth: 'cheer' }} />
      <OrangeSlice className="float f-09" width={54} height={54} pose={{ arms: 'down', mood: 'happy' }} />
      <Lemon className="float f-10" width={50} height={50} pose={{ arms: 'shy' }} />
      <Watermelon className="float f-11" width={60} height={60} pose={{ arms: 'up', mouth: 'cheer' }} />
      <Strawberry className="float f-12" width={58} height={58} pose={{ arms: 'shy', mouth: 'soft' }} />
      <Grapes className="float f-13" width={58} height={58} pose={{ arms: 'down', mood: 'wink' }} />
      <Orange className="float f-14" width={54} height={54} pose={{ arms: 'down', mood: 'happy' }} />

      <div className="hero-content container">
        <p className="hero-chip">¡Estás invitado!</p>
        <h1 className="hero-title">
          <span className="hero-name-block">
            <span className="hero-name">
              <span className="hero-oh">¡</span>Santiago
            </span>
            <Squiggle className="hero-squiggle" />
          </span>
          <span className="hero-title-rest">cumple 3 años!</span>
        </h1>
        <div className="hero-photo-wrap">
          <span className="hero-photo-sun" aria-hidden="true" />
          <img
            className="hero-photo"
            src="/santiago.png"
            alt="Santiago sonriendo en su cumpleaños número 3"
            width={433}
            height={577}
            loading="eager"
            decoding="async"
          />
        </div>
        <p className="hero-sub">
          Ven a celebrar un día lleno de colores, juegos inflables y pura diversión.
        </p>
        <p className="hero-date">Domingo 27 de septiembre · 2026</p>
        <a className="cta-button" href="#confirmar">
          <PartyPopper size={22} aria-hidden="true" />
          Confirmar asistencia
        </a>
      </div>

      <WaveDivider className="hero-wave" style={{ color: 'var(--color-band-blue)' }} />
      </header>
    </div>
  )
}
