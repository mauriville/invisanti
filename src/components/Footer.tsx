import { Apple, Grapes, Lemon, Strawberry, Watermelon } from './Fruits'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-fruits" aria-hidden="true">
        <Strawberry width={42} height={42} style={{ transform: 'rotate(-10deg)' }} />
        <Lemon width={46} height={46} style={{ transform: 'rotate(8deg)' }} />
        <Watermelon width={44} height={44} style={{ transform: 'rotate(-6deg)' }} />
        <Apple width={42} height={42} style={{ transform: 'rotate(10deg)' }} />
        <Grapes width={42} height={42} style={{ transform: 'rotate(-8deg)' }} />
      </div>
      <h2 className="footer-title">¡Los esperamos para celebrar juntos!</h2>
      <p className="footer-thanks">
        Gracias por ser parte de este día tan especial para nuestra familia.
      </p>
      <p className="footer-signature">
        Con cariño,
        <br />
        Valeria y Mauricio
      </p>
      <p className="footer-meta">Domingo 27 de septiembre de 2026 · 09:30 – 15:00</p>
      </div>
    </footer>
  )
}
