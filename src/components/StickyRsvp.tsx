import { useEffect, useState } from 'react'
import { PartyPopper } from 'lucide-react'

export function StickyRsvp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const scene = document.querySelector('.hero-scene')
    const rsvp = document.getElementById('confirmar')
    const footer = document.querySelector('.footer')
    if (!scene || !rsvp) return

    let heroOut = false
    let rsvpIn = false
    let footerIn = false
    const sync = () => setShow(heroOut && !rsvpIn && !footerIn)

    const observers = [scene, rsvp, ...(footer ? [footer] : [])].map((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (index === 0) heroOut = !entry.isIntersecting
          if (index === 1) rsvpIn = entry.isIntersecting
          if (index === 2) footerIn = entry.isIntersecting
          sync()
        },
        { threshold: 0.1 },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <div className={`sticky-rsvp${show ? '' : ' sticky-rsvp--hidden'}`}>
      <a className="sticky-rsvp-button" href="#confirmar">
        <PartyPopper size={20} aria-hidden="true" />
        Confirmar asistencia
      </a>
    </div>
  )
}
