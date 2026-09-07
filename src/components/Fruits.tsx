import type { SVGProps } from 'react'

type FruitProps = SVGProps<SVGSVGElement>

function FruitSvg({ children, ...props }: FruitProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function Strawberry(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <rect x="30.8" y="6" width="2.4" height="7" rx="1.2" fill="#3E8B57" />
      <ellipse cx="24" cy="15" rx="6.4" ry="3.2" transform="rotate(-24 24 15)" fill="#48A868" />
      <ellipse cx="40" cy="15" rx="6.4" ry="3.2" transform="rotate(24 40 15)" fill="#48A868" />
      <ellipse cx="32" cy="13.4" rx="6.8" ry="3.6" fill="#5CB878" />
      <path
        d="M32 17c-8.5 0-15.5 4.6-16.9 11.2C13.3 37 21.5 49.6 32 56c10.5-6.4 18.7-19 16.9-27.8C47.5 21.6 40.5 17 32 17Z"
        fill="#F45B69"
      />
      <ellipse cx="23.5" cy="30" rx="4.6" ry="7" fill="#FFFFFF" opacity=".28" transform="rotate(-16 23.5 30)" />
      <ellipse cx="25" cy="34" rx="1.6" ry="2.2" fill="#FFEFC2" />
      <ellipse cx="39" cy="34" rx="1.6" ry="2.2" fill="#FFEFC2" />
      <ellipse cx="32" cy="29" rx="1.6" ry="2.2" fill="#FFEFC2" />
      <ellipse cx="28.5" cy="42" rx="1.6" ry="2.2" fill="#FFEFC2" />
      <ellipse cx="36" cy="43" rx="1.6" ry="2.2" fill="#FFEFC2" />
      <ellipse cx="32" cy="50" rx="1.6" ry="2.2" fill="#FFEFC2" />
    </FruitSvg>
  )
}

export function Watermelon(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <path d="M6 34a26 26 0 0 1 52 0L32 58Z" fill="#48A868" />
      <path d="M10.5 34a21.5 21.5 0 0 1 43 0L32 53.5Z" fill="#F3FBE7" />
      <path d="M14 34a18 18 0 0 1 36 0L32 50Z" fill="#F45B69" />
      <ellipse cx="25" cy="33" rx="1.6" ry="2.3" transform="rotate(12 25 33)" fill="#3E2723" />
      <ellipse cx="39" cy="33" rx="1.6" ry="2.3" transform="rotate(-12 39 33)" fill="#3E2723" />
      <ellipse cx="32" cy="25.5" rx="1.6" ry="2.3" fill="#3E2723" />
      <ellipse cx="30.4" cy="41" rx="1.6" ry="2.3" transform="rotate(16 30.4 41)" fill="#3E2723" />
      <ellipse cx="37.6" cy="40.4" rx="1.4" ry="2" transform="rotate(-18 37.6 40.4)" fill="#3E2723" />
    </FruitSvg>
  )
}

export function OrangeSlice(props: FruitProps) {
  const wedges = [0, 60, 120, 180, 240, 300]
  return (
    <FruitSvg {...props}>
      <circle cx="32" cy="32" r="24" fill="#F08A00" />
      <circle cx="32" cy="32" r="20.5" fill="#FFC55C" />
      <g fill="#FFA22E">
        {wedges.map((deg) => (
          <path
            key={deg}
            d="M32 32 27.4 14.6a18 18 0 0 1 9.2 0Z"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="2.6" fill="#FFC55C" />
      <path
        d="M15.5 24a19.5 19.5 0 0 1 9-8.6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".5"
      />
    </FruitSvg>
  )
}

export function OrangeClock(props: FruitProps) {
  const wedges = [30, 90, 150, 210, 270, 330]
  return (
    <FruitSvg {...props}>
      <circle cx="32" cy="32" r="24" fill="#F08A00" />
      <circle cx="32" cy="32" r="20.5" fill="#FFC55C" />
      <g fill="#FFA22E">
        {wedges.map((deg) => (
          <path
            key={deg}
            d="M32 32 28.2 16.5a16 16 0 0 1 7.6 0Z"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>
      <path d="M32 32V20" stroke="#FFF8E7" strokeWidth="4.6" strokeLinecap="round" />
      <path d="M32 32 24.4 37" stroke="#FFF8E7" strokeWidth="4.6" strokeLinecap="round" />
      <path d="M32 32V21.5" stroke="#4A2E2A" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M32 32l-6.4 4.2" stroke="#4A2E2A" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="32" cy="32" r="2.4" fill="#4A2E2A" />
    </FruitSvg>
  )
}

export function Lemon(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <circle cx="11" cy="34" r="4.6" fill="#F5C518" />
      <circle cx="53" cy="34" r="4.6" fill="#F5C518" />
      <ellipse cx="32" cy="34" rx="21.5" ry="14.5" fill="#FFD84D" />
      <path
        d="M18 27a17.5 17.5 0 0 1 9.5-4.6"
        fill="none"
        stroke="#FFF3B0"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <ellipse cx="41" cy="15.5" rx="6.2" ry="3" transform="rotate(-28 41 15.5)" fill="#5CB878" />
    </FruitSvg>
  )
}

export function Grapes(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <path d="M32 6c.4 4.6-.8 8-3.4 11.4" fill="none" stroke="#7A4B2A" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="39.5" cy="11.5" rx="6.4" ry="3.1" transform="rotate(26 39.5 11.5)" fill="#5CB878" />
      <g fill="#8A5FBF">
        <circle cx="21.5" cy="24" r="5.7" />
        <circle cx="32" cy="22" r="5.7" />
        <circle cx="42.5" cy="24" r="5.7" />
        <circle cx="26.5" cy="33.5" r="5.7" />
        <circle cx="37.5" cy="33.5" r="5.7" />
        <circle cx="32" cy="43" r="5.7" />
      </g>
      <g fill="#FFFFFF" opacity=".35">
        <circle cx="20" cy="22.4" r="1.7" />
        <circle cx="30.4" cy="20.4" r="1.7" />
        <circle cx="25" cy="31.9" r="1.7" />
        <circle cx="30.4" cy="41.4" r="1.6" />
      </g>
    </FruitSvg>
  )
}

export function Apple(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <path d="M32 17c.6-4.4 2.3-7.2 5-9" fill="none" stroke="#7A4B2A" strokeWidth="2.8" strokeLinecap="round" />
      <ellipse cx="41.5" cy="11.5" rx="6.2" ry="3" transform="rotate(24 41.5 11.5)" fill="#5CB878" />
      <path
        d="M32 19c-2.8-4.6-8.6-6.4-13.4-4C12 18.5 10.4 27 14.2 35.4 17.6 43 24.2 50.4 28.2 52.4c1.5.8 2.4 1.2 3.8 1.2s2.3-.4 3.8-1.2c4-2 10.6-9.4 14-17C53.6 27 52 18.5 45.4 15c-4.8-2.4-10.6-.6-13.4 4Z"
        fill="#E8503A"
      />
      <ellipse cx="23" cy="28" rx="4.4" ry="6.4" fill="#FFFFFF" opacity=".28" transform="rotate(-14 23 28)" />
    </FruitSvg>
  )
}

export function Pear(props: FruitProps) {
  return (
    <FruitSvg {...props}>
      <path d="M32 11c.3-2.8 1.5-4.6 3.4-6" fill="none" stroke="#7A4B2A" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="40" cy="8.5" rx="5.6" ry="2.8" transform="rotate(22 40 8.5)" fill="#5CB878" />
      <path
        d="M32 12c-1.5 6.6-5.2 10.5-9.2 14.6C18.9 30.6 16 35.4 16 41a16 16 0 0 0 32 0c0-5.6-2.9-10.4-6.8-14.4-4-4.1-7.7-8-9.2-14.6Z"
        fill="#A6C93B"
      />
      <ellipse cx="24.5" cy="41" rx="4" ry="6.6" fill="#FFFFFF" opacity=".3" transform="rotate(-10 24.5 41)" />
    </FruitSvg>
  )
}

export function Squiggle(props: FruitProps) {
  return (
    <FruitSvg viewBox="0 0 220 22" {...props}>
      <path
        d="M6 14c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 40-2"
        fill="none"
        stroke="#FFD84D"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </FruitSvg>
  )
}

export function Sprinkles(props: FruitProps) {
  return (
    <FruitSvg viewBox="0 0 360 640" preserveAspectRatio="xMidYMid slice" {...props}>
      <g strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M30 176q8-10 16 0t16 0" stroke="#FFD84D" />
        <path d="M312 236q8-10 16 0t16 0" stroke="#F45B69" />
        <path d="M46 296v14M39 303h14" stroke="#FF9F1C" />
        <path d="M310 320v14M303 327h14" stroke="#48A868" />
      </g>
      <circle cx="52" cy="92" r="4.5" fill="#F45B69" opacity=".55" />
      <circle cx="312" cy="118" r="3.5" fill="#FF9F1C" opacity=".55" />
      <circle cx="38" cy="420" r="3.8" fill="#7955A6" opacity=".5" />
      <circle cx="326" cy="468" r="4.2" fill="#48A868" opacity=".5" />
      <circle cx="300" cy="562" r="3.4" fill="#F45B69" opacity=".5" />
      <circle cx="64" cy="548" r="3.4" fill="#FF9F1C" opacity=".5" />
      <path d="M326 376l4.4 8.8 9.6 1.4-7 6.8 1.6 9.6-8.6-4.6-8.6 4.6 1.6-9.6-7-6.8 9.6-1.4Z" fill="#FFD84D" opacity=".7" />
      <path d="M46 512l4.4 8.8 9.6 1.4-7 6.8 1.6 9.6-8.6-4.6-8.6 4.6 1.6-9.6-7-6.8 9.6-1.4Z" fill="#7955A6" opacity=".55" />
    </FruitSvg>
  )
}

export function WaveDivider({
  flip = false,
  ...props
}: FruitProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={`wave${flip ? ' wave--flip' : ''}${props.className ? ` ${props.className}` : ''}`}
      style={{ color: 'currentColor', ...props.style }}
    >
      <path
        d="M0,54 C120,86 260,12 400,38 C540,64 660,16 800,42 C940,68 1080,14 1220,40 C1320,58 1390,48 1440,44 L1440,90 L0,90 Z"
        fill="currentColor"
        transform={flip ? 'translate(0 90) scale(1 -1)' : undefined}
      />
    </svg>
  )
}

export function MapArt(props: FruitProps) {
  return (
    <FruitSvg viewBox="0 0 400 240" {...props}>
      <rect width="400" height="240" fill="#FFF3D6" />
      <g fill="none" stroke="#FFFBEE" strokeWidth="26" strokeLinecap="round">
        <path d="M-20 78 C 80 66, 150 116, 230 104 S 380 134, 430 122" />
        <path d="M118 -20 C 132 60, 96 140, 116 260" />
        <path d="M-20 196 C 100 176, 260 214, 430 184" />
      </g>
      <g fill="none" stroke="#EFD9A8" strokeWidth="2.4" strokeDasharray="9 11" strokeLinecap="round">
        <path d="M-20 78 C 80 66, 150 116, 230 104 S 380 134, 430 122" />
        <path d="M118 -20 C 132 60, 96 140, 116 260" />
        <path d="M-20 196 C 100 176, 260 214, 430 184" />
      </g>
      <ellipse cx="332" cy="42" rx="48" ry="27" fill="#CDE8C0" />
      <circle cx="316" cy="36" r="6.5" fill="#9CD08B" />
      <circle cx="334" cy="48" r="8" fill="#9CD08B" />
      <circle cx="352" cy="34" r="5.5" fill="#9CD08B" />
      <g>
        <rect x="34" y="128" width="24" height="16" rx="3" fill="#FFDFC2" />
        <path d="M32 128 46 116l14 12Z" fill="#F4A25B" />
        <rect x="252" y="140" width="26" height="17" rx="3" fill="#FFDFC2" />
        <path d="M250 140 265 127l15 13Z" fill="#F4A25B" />
        <rect x="150" y="196" width="24" height="16" rx="3" fill="#FFDFC2" />
        <path d="M148 196 162 184l14 12Z" fill="#F4A25B" />
      </g>
      <circle className="map-pulse" cx="210" cy="94" r="24" fill="none" stroke="#D93A4E" strokeWidth="4" opacity=".6" />
      <path
        d="M210 130c-14.5-12.5-24-24.5-24-38a24 24 0 1 1 48 0c0 13.5-9.5 25.5-24 38Z"
        fill="#D93A4E"
      />
      <circle cx="210" cy="92" r="9.5" fill="#FFF8E7" />
      <ellipse cx="222" cy="66" rx="7" ry="3.4" transform="rotate(28 222 66)" fill="#48A868" />
      <text x="30" y="62" fill="#A08454" fontSize="12" fontWeight="700">Calle 28</text>
      <text x="128" y="158" fill="#A08454" fontSize="12" fontWeight="700">Calle 2</text>
      <text x="284" y="222" fill="#A08454" fontSize="12" fontWeight="700">Calle 3</text>
      <text x="230" y="86" fill="#D93A4E" fontSize="14" fontWeight="800">Chiquilladas</text>
    </FruitSvg>
  )
}

export function TrioDivider() {
  return (
    <div className="trio-divider" aria-hidden="true">
      <Strawberry width={34} height={34} style={{ transform: 'rotate(-10deg)' }} />
      <Lemon width={38} height={38} style={{ transform: 'rotate(6deg)' }} />
      <Watermelon width={36} height={36} style={{ transform: 'rotate(-6deg)' }} />
    </div>
  )
}
