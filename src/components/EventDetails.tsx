import {
  Apple,
  Grapes,
  Lemon,
  Orange,
  OrangeClock,
  OrangeSlice,
  Pear,
  Strawberry,
  WaveDivider,
  Watermelon,
} from './Fruits'
import { Reveal } from './Reveal'

export function EventDetails() {
  return (
    <section className="details" aria-labelledby="details-title">
      <div className="details-inner">
        <Pear className="section-fruit sf-1" width={54} height={54} pose={{ arms: 'shy', mouth: 'soft' }} />
        <OrangeSlice className="section-fruit sf-2" width={48} height={48} pose={{ arms: 'wave', mood: 'wink' }} />
        <Grapes className="section-fruit sf-3" width={44} height={44} pose={{ arms: 'down', mood: 'happy' }} />
        <Lemon className="section-fruit sf-4" width={46} height={46} pose={{ arms: 'shy' }} />
        <Strawberry
          className="section-fruit section-fruit--sway sf-5"
          width={48}
          height={48}
          pose={{ arms: 'wave' }}
        />
        <Apple className="section-fruit sf-6" width={46} height={46} pose={{ arms: 'up', mouth: 'cheer' }} />
        <Orange className="section-fruit sf-17" width={50} height={50} pose={{ arms: 'wave', mood: 'happy' }} />
        <Strawberry className="section-fruit sf-18" width={48} height={48} pose={{ arms: 'up' }} />
        <Lemon
          className="section-fruit section-fruit--sway sf-19"
          width={52}
          height={52}
          pose={{ arms: 'up', mood: 'happy' }}
        />
        <Grapes className="section-fruit sf-20" width={48} height={48} pose={{ arms: 'down' }} />
        <Watermelon className="section-fruit sf-21" width={54} height={54} pose={{ arms: 'down', mouth: 'soft' }} />
        <Apple className="section-fruit sf-22" width={50} height={50} pose={{ arms: 'wave' }} />
        <OrangeSlice
          className="section-fruit section-fruit--sway sf-23"
          width={52}
          height={52}
          pose={{ arms: 'up', mood: 'wink' }}
        />
        <Pear className="section-fruit sf-24" width={50} height={50} pose={{ arms: 'shy', mood: 'happy' }} />
        <div className="container">
          <Reveal className="section-head">
            <h2 id="details-title">El gran día</h2>
            <p className="lead">Una mañana entera de fiesta. ¡Apunta la fecha y no llegues tarde!</p>
          </Reveal>

          <div className="details-list">
            <Reveal>
              <article className="detail detail--date">
                <div className="detail-icon" aria-hidden="true">
                  <Strawberry width={52} height={52} pose={{ arms: 'up', mouth: 'cheer' }} />
                </div>
                <div>
                  <p className="detail-label">Cuándo</p>
                  <p className="detail-value">Domingo 27 de septiembre</p>
                  <p className="detail-sub">2026 · ¡no puedes faltar!</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="detail detail--time">
                <div className="detail-icon" aria-hidden="true">
                  <OrangeClock width={52} height={52} pose={{ arms: 'down', mood: 'wink' }} />
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
                  <Grapes width={50} height={50} pose={{ arms: 'shy', mouth: 'soft' }} />
                </div>
                <div>
                  <p className="detail-label">Dónde</p>
                  <p className="detail-value">Salón Chiquilladas</p>
                  <p className="detail-sub">La Barqueta de Achumani</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={280}>
              <article className="detail detail--fun">
                <div className="detail-icon" aria-hidden="true">
                  <Watermelon width={52} height={52} pose={{ arms: 'up', mouth: 'cheer' }} />
                </div>
                <div>
                  <p className="detail-label">La diversión</p>
                  <p className="detail-value">Juegos inflables</p>
                  <p className="detail-sub">¡Puros brincos y risas!</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
      <WaveDivider className="wave" flip style={{ color: 'var(--color-band-blue)' }} />
    </section>
  )
}
