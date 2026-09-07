import { MapPin } from 'lucide-react'
import { Apple, Grapes, MapArt, OrangeSlice, ParadeDivider, Pear, Strawberry, Watermelon } from './Fruits'
import { Reveal } from './Reveal'

export const MAPS_URL =
  'https://www.google.com/maps/place/Sal%C3%B3n+De+Eventos+Infantiles+Chiquilladas/@-16.5218842,-68.0655214,363m/data=!3m1!1e3!4m6!3m5!1s0x915f216c1e192e8b:0x2195b09e2d7e722b!8m2!3d-16.5213267!4d-68.0657233!16s%2Fg%2F11c1bgfj0h?entry=ttu'

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
            <MapArt className="map-art" />
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
