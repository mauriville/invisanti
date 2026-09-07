import { PartyPopper } from 'lucide-react'
import {
  Grapes,
  Lemon,
  OrangeSlice,
  Pear,
  Sprinkles,
  Squiggle,
  Strawberry,
  WaveDivider,
  Watermelon,
} from './Fruits'

export function Hero() {
  return (
    <header className="hero">
      <Sprinkles className="hero-sprinkles" />
      <Strawberry className="float f-strawberry" width={58} height={58} />
      <Watermelon className="float f-watermelon" width={66} height={66} />
      <OrangeSlice className="float f-orange" width={52} height={52} />
      <Lemon className="float f-lemon" width={62} height={62} />
      <Grapes className="float f-grapes" width={54} height={54} />
      <Pear className="float f-pear" width={56} height={56} />

      <div className="hero-content container">
        <p className="hero-chip">¡Estás invitado!</p>
        <h1 className="hero-title">
          <span className="hero-name-block">
            <span className="hero-name">
              <span className="hero-oh">¡</span>Santiago
            </span>
            <Squiggle className="hero-squiggle" />
          </span>
          <span className="hero-title-rest">está de cumpleaños!</span>
        </h1>
        <p className="hero-sub">
          Ven a celebrar un día lleno de colores, juegos y muchas frutas. ¡La fiesta se pone rica!
        </p>
        <p className="hero-date">Domingo 27 de septiembre · 2026</p>
        <a className="cta-button" href="#confirmar">
          <PartyPopper size={22} aria-hidden="true" />
          Confirmar asistencia
        </a>
      </div>

      <WaveDivider className="hero-wave" style={{ color: 'var(--lemon-band)' }} />
    </header>
  )
}
