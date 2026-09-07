import { Apple, Grapes, Lemon, Orange, OrangeSlice, Pear, Strawberry, Watermelon } from './Fruits'

export function Footer() {
  return (
    <footer className="footer">
      <Apple
        className="section-fruit section-fruit--sway sf-15"
        width={62}
        height={62}
        pose={{ arms: 'wave', mood: 'happy' }}
      />
      <Strawberry className="section-fruit sf-16" width={66} height={66} pose={{ arms: 'up', mouth: 'cheer' }} />
      <div className="container">
        <div className="footer-fruits" aria-hidden="true">
          <Watermelon width={46} height={46} pose={{ arms: 'down', mood: 'happy' }} style={{ transform: 'rotate(-6deg)' }} />
          <Strawberry width={50} height={50} pose={{ arms: 'up', mouth: 'cheer' }} style={{ transform: 'rotate(5deg)' }} />
          <OrangeSlice width={44} height={44} pose={{ arms: 'wave', mood: 'wink' }} style={{ transform: 'rotate(-8deg)' }} />
          <Apple width={48} height={48} pose={{ arms: 'wave' }} style={{ transform: 'rotate(6deg)' }} />
          <Pear width={46} height={46} pose={{ arms: 'shy' }} style={{ transform: 'rotate(-5deg)' }} />
          <Lemon width={50} height={50} pose={{ arms: 'up', mood: 'happy' }} style={{ transform: 'rotate(7deg)' }} />
          <Grapes width={46} height={46} pose={{ arms: 'up', mouth: 'cheer' }} style={{ transform: 'rotate(-6deg)' }} />
          <Orange width={42} height={42} pose={{ arms: 'wave' }} style={{ transform: 'rotate(8deg)' }} />
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
