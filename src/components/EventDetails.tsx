import { MapPin } from 'lucide-react'
import { OrangeClock, Strawberry, WaveDivider } from './Fruits'
import { Reveal } from './Reveal'

export function EventDetails() {
  return (
    <section className="details" aria-labelledby="details-title">
      <div className="details-inner">
        <div className="container">
          <Reveal className="section-head">
          <h2 id="details-title">El gran día</h2>
          <p className="lead">Una mañana entera de fiesta. ¡Apunta la fecha y no llegues tarde!</p>
          </Reveal>

          <div className="details-list">
            <Reveal>
              <article className="detail detail--date">
                <div className="detail-icon" aria-hidden="true">
                  <Strawberry width={40} height={40} />
                </div>
                <div>
                  <p className="detail-label">Cuándo</p>
                  <p className="detail-value">Domingo 27 de septiembre</p>
                  <p className="detail-sub">2026 · nada de falta</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="detail detail--time">
                <div className="detail-icon" aria-hidden="true">
                  <OrangeClock width={40} height={40} />
                </div>
                <div>
                  <p className="detail-label">A qué hora</p>
                  <p className="detail-value">09:30 – 15:00</p>
                  <p className="detail-sub">5 horas y media de diversión</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="detail detail--place">
                <div className="detail-icon" aria-hidden="true">
                  <MapPin size={34} strokeWidth={2.4} />
                </div>
                <div>
                  <p className="detail-label">Dónde</p>
                  <p className="detail-value">Salón Chiquilladas</p>
                  <p className="detail-sub">La Barqueta de Achumani</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
      <WaveDivider className="wave" flip style={{ color: 'var(--lemon-band)' }} />
    </section>
  )
}
