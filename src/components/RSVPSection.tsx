import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { AttendanceSelector } from './AttendanceSelector'
import { Grapes, Lemon, Orange, Pear, Strawberry, Watermelon, WaveDivider } from './Fruits'
import { Reveal } from './Reveal'
import { buildWhatsAppUrl, parents, type Parent } from '../lib/rsvp'

const ORDER: Parent[] = ['mama', 'papa']

export function RSVPSection() {
  const [guests, setGuests] = useState(2)
  const feedback =
    guests === 1
      ? '¡Genial! Esperamos a 1 persona.'
      : `¡Genial! Esperamos a ${guests} personas.`

  return (
    <section className="rsvp" id="confirmar" aria-labelledby="rsvp-title">
      <WaveDivider className="wave" style={{ color: 'var(--color-band-green)' }} />
      <div className="rsvp-inner">
        <Strawberry
          className="section-fruit section-fruit--sway sf-9"
          width={50}
          height={50}
          pose={{ arms: 'up', mouth: 'cheer' }}
        />
        <Orange className="section-fruit sf-10" width={48} height={48} pose={{ arms: 'wave' }} />
        <Grapes className="section-fruit sf-11" width={44} height={44} pose={{ arms: 'down', mood: 'happy' }} />
        <Watermelon className="section-fruit sf-12" width={50} height={50} pose={{ arms: 'up', mouth: 'cheer' }} />
        <Lemon className="section-fruit sf-13" width={48} height={48} pose={{ arms: 'up', mood: 'happy' }} />
        <Pear className="section-fruit sf-14" width={46} height={46} pose={{ arms: 'shy', mood: 'wink' }} />
        <Watermelon className="section-fruit sf-29" width={50} height={50} pose={{ arms: 'wave' }} />
        <Lemon
          className="section-fruit section-fruit--sway sf-30"
          width={48}
          height={48}
          pose={{ arms: 'up', mouth: 'cheer' }}
        />
        <Orange className="section-fruit sf-31" width={48} height={48} pose={{ arms: 'up', mood: 'wink' }} />
        <Grapes className="section-fruit sf-32" width={46} height={46} pose={{ arms: 'shy', mouth: 'soft' }} />
        <Strawberry className="section-fruit sf-33" width={48} height={48} pose={{ arms: 'down', mouth: 'soft' }} />
        <Pear
          className="section-fruit section-fruit--sway sf-34"
          width={48}
          height={48}
          pose={{ arms: 'up', mood: 'happy' }}
        />
        <div className="container">
          <Reveal className="section-head">
            <h2 id="rsvp-title">¿Nos acompañas?</h2>
            <p className="lead">
              Elige cuántos vienen y confirma con un toque. Así guardamos lugar para todos.
            </p>
          </Reveal>

          <Reveal delay={90} className="rsvp-box">
            <div className="rsvp-cheer" aria-hidden="true">
              <Grapes width={44} height={44} pose={{ arms: 'up', mouth: 'cheer' }} style={{ transform: 'rotate(-6deg)' }} />
              <Strawberry width={50} height={50} pose={{ arms: 'wave' }} />
              <Lemon width={46} height={46} pose={{ arms: 'up', mood: 'happy' }} style={{ transform: 'rotate(6deg)' }} />
              <Orange
                className="cheer-extra"
                width={44}
                height={44}
                pose={{ arms: 'wave', mood: 'happy' }}
                style={{ transform: 'rotate(-5deg)' }}
              />
              <Watermelon
                className="cheer-extra-plus"
                width={48}
                height={48}
                pose={{ arms: 'up', mouth: 'cheer' }}
                style={{ transform: 'rotate(5deg)' }}
              />
              <Pear
                className="cheer-extra-plus"
                width={42}
                height={42}
                pose={{ arms: 'shy', mood: 'wink' }}
                style={{ transform: 'rotate(-4deg)' }}
              />
            </div>

            <AttendanceSelector value={guests} onChange={setGuests} />
            <p className="rsvp-feedback" key={guests} aria-live="polite">
              {feedback}
            </p>

            <div className="wa-buttons">
              {ORDER.map((key) => {
                const parent = parents[key]
                return (
                  <a
                    key={key}
                    className={`wa-button wa-button--${key}`}
                    href={buildWhatsAppUrl(key, guests)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Confirmar asistencia con ${parent.name} (${parent.role}) por WhatsApp`}
                  >
                    <span className="wa-icon" aria-hidden="true">
                      <MessageCircle size={24} strokeWidth={2.4} />
                    </span>
                    <span className="wa-text">
                      <strong>Confirmar con {parent.role}</strong>
                      <small>
                        {parent.name} · {parent.displayPhone}
                      </small>
                    </span>
                  </a>
                )
              })}
            </div>

            <p className="rsvp-help">Se abrirá WhatsApp con tu mensaje listo. Solo presiona enviar</p>
          </Reveal>
        </div>
      </div>
      <WaveDivider className="wave" flip style={{ color: 'var(--color-band-green)' }} />
    </section>
  )
}
