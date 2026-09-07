import { MapPin } from 'lucide-react'
import { Apple, Grapes, OrangeSlice, ParadeDivider, Pear, Strawberry, Watermelon } from './Fruits'
import { Reveal } from './Reveal'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+de+Eventos+Infantiles+Chiquilladas%2C+Entre+calles+2+y+3%2C+La+Barqueta+de+Achumani%2C+La+Paz%2C+Bolivia'

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=-16.5213267,-68.0657233&z=17&hl=es&output=embed'

export function LocationSection() {
  return (
    <section className="location" aria-labelledby="location-title">
      <Pear className="section-fruit sf-7" width={46} height={46} pose={{ arms: 'shy', mouth: 'soft' }} />
      <OrangeSlice className="section-fruit sf-8" width={48} height={48} pose={{ arms: 'wave' }} />
      <div className="container">
        <Reveal className="section-head">
          <h2 id="location-title">¿Dónde celebramos?</h2>
          <p className="lead">Un rincón hecho para jugar, reír y llenarse de manchitas de fruta.</p>
        </Reveal>

        <Reveal delay={90}>
          <div className="map-card">
            <span className="map-char map-char--tl" aria-hidden="true">
              <Watermelon width={46} height={46} pose={{ arms: 'down', mood: 'happy' }} />
            </span>
            <span className="map-char map-char--tr" aria-hidden="true">
              <Strawberry width={52} height={52} pose={{ arms: 'wave' }} />
            </span>
            <span className="map-char map-char--bl" aria-hidden="true">
              <Apple width={44} height={44} pose={{ arms: 'shy', mouth: 'soft' }} />
            </span>
            <span className="map-char map-char--br" aria-hidden="true">
              <Grapes width={42} height={42} pose={{ arms: 'up', mood: 'wink' }} />
            </span>
            <iframe
              className="map-embed"
              src={MAPS_EMBED_URL}
              title="Mapa de la ubicación del Salón de Eventos Infantiles Chiquilladas"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-body">
              <p className="venue-name">Salón de Eventos Infantiles Chiquilladas</p>
              <p className="venue-address">
                Entre calles 2 y 3, La Barqueta de Achumani, altura calle 28
              </p>
              <a
                className="map-button"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver ubicación del salón Chiquilladas en Google Maps (se abre en una pestaña nueva)"
              >
                <MapPin size={22} aria-hidden="true" />
                Ver ubicación en Google Maps
              </a>
              <p className="map-note">Se abre en una pestaña nueva</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ParadeDivider />
        </Reveal>
      </div>
    </section>
  )
}
