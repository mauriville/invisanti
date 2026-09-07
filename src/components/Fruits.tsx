import { useId } from 'react'
import type { SVGProps } from 'react'

type FruitProps = SVGProps<SVGSVGElement>
type Mood = 'open' | 'happy' | 'wink'
type MouthType = 'smile' | 'cheer' | 'soft'
type ArmPose = 'down' | 'up' | 'wave' | 'shy'

export interface FruitPose {
  arms?: ArmPose
  mood?: Mood
  mouth?: MouthType
}

function useFruitId() {
  return useId().replace(/[^a-zA-Z0-9]/g, '')
}

function FruitSvg({ children, ...props }: FruitProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

function BodyGrad({ id, hi, mid, deep }: { id: string; hi: string; mid: string; deep: string }) {
  return (
    <radialGradient id={id} cx="0.38" cy="0.28" r="0.9">
      <stop offset="0" stopColor={hi} />
      <stop offset="0.55" stopColor={mid} />
      <stop offset="1" stopColor={deep} />
    </radialGradient>
  )
}

function GlossGrad({ id }: { id: string }) {
  return (
    <radialGradient id={id}>
      <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
      <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0.5" />
      <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
    </radialGradient>
  )
}

function ShadowGrad({ id }: { id: string }) {
  return (
    <radialGradient id={id}>
      <stop offset="0" stopColor="#4A2E2A" stopOpacity="0.3" />
      <stop offset="0.6" stopColor="#4A2E2A" stopOpacity="0.13" />
      <stop offset="1" stopColor="#4A2E2A" stopOpacity="0" />
    </radialGradient>
  )
}

function BlushGrad({ id }: { id: string }) {
  return (
    <radialGradient id={id}>
      <stop offset="0" stopColor="#FF7FA0" stopOpacity="0.55" />
      <stop offset="0.6" stopColor="#FF7FA0" stopOpacity="0.24" />
      <stop offset="1" stopColor="#FF7FA0" stopOpacity="0" />
    </radialGradient>
  )
}

function Eye({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#2B1B16" />
      <circle cx={x - r * 0.3} cy={y - r * 0.35} r={r * 0.36} fill="#FFFFFF" />
      <circle cx={x + r * 0.32} cy={y + r * 0.4} r={r * 0.16} fill="#FFFFFF" opacity="0.85" />
    </g>
  )
}

function HappyEye({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <path
      d={`M${x - r} ${y + 1} Q ${x} ${y - r * 1.7} ${x + r} ${y + 1}`}
      fill="none"
      stroke="#2B1B16"
      strokeWidth={r * 0.55}
      strokeLinecap="round"
    />
  )
}

function Mouth({ x, y, type, tone }: { x: number; y: number; type: MouthType; tone: string }) {
  if (type === 'cheer') {
    return (
      <g>
        <ellipse cx={x} cy={y + 1.5} rx={4} ry={4.6} fill={tone} />
        <ellipse cx={x} cy={y + 3.4} rx={2.3} ry={1.7} fill="#FF8296" />
      </g>
    )
  }
  if (type === 'soft') {
    return (
      <path
        d={`M${x - 2.6} ${y} Q ${x} ${y + 2.2} ${x + 2.6} ${y}`}
        fill="none"
        stroke={tone}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    )
  }
  return (
    <path
      d={`M${x - 4.6} ${y} Q ${x} ${y + 4.4} ${x + 4.6} ${y}`}
      fill="none"
      stroke={tone}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  )
}

interface FaceProps {
  blushId: string
  x?: number
  y?: number
  dx?: number
  r?: number
  mood?: Mood
  mouth?: MouthType
  tone?: string
  blushDx?: number
}

function Face({ blushId, x = 48, y = 44, dx = 12, r = 5, mood = 'open', mouth = 'smile', tone = '#5B2330', blushDx }: FaceProps) {
  const bd = blushDx ?? dx + 6.5
  return (
    <g>
      {mood === 'happy' ? (
        <>
          <HappyEye x={x - dx} y={y} r={r} />
          <HappyEye x={x + dx} y={y} r={r} />
        </>
      ) : mood === 'wink' ? (
        <>
          <Eye x={x - dx} y={y} r={r} />
          <HappyEye x={x + dx} y={y} r={r} />
        </>
      ) : (
        <>
          <Eye x={x - dx} y={y} r={r} />
          <Eye x={x + dx} y={y} r={r} />
        </>
      )}
      <ellipse cx={x - bd} cy={y + r + 2} rx={4.6} ry={2.7} fill={`url(#${blushId})`} />
      <ellipse cx={x + bd} cy={y + r + 2} rx={4.6} ry={2.7} fill={`url(#${blushId})`} />
      <Mouth x={x} y={y + r + 5.5} type={mouth} tone={tone} />
    </g>
  )
}

function Arm({ d, color }: { d: string; color: string }) {
  return <path d={d} fill="none" stroke={color} strokeWidth="5.6" strokeLinecap="round" />
}

function Arms({ cx, y, span, color, pose = 'down' }: { cx: number; y: number; span: number; color: string; pose?: ArmPose }) {
  const lx = cx - span
  const rx = cx + span
  if (pose === 'up') {
    return (
      <>
        <Arm d={`M${lx + 2} ${y} Q ${lx - 5} ${y - 5} ${lx - 7} ${y - 13}`} color={color} />
        <Arm d={`M${rx - 2} ${y} Q ${rx + 5} ${y - 5} ${rx + 7} ${y - 13}`} color={color} />
      </>
    )
  }
  if (pose === 'wave') {
    return (
      <>
        <Arm d={`M${lx + 2} ${y} Q ${lx - 5} ${y + 3} ${lx - 8} ${y + 9}`} color={color} />
        <Arm d={`M${rx - 2} ${y} Q ${rx + 5} ${y - 5} ${rx + 7} ${y - 13}`} color={color} />
      </>
    )
  }
  if (pose === 'shy') {
    return (
      <>
        <Arm d={`M${lx + 3} ${y + 1} Q ${lx - 2} ${y + 5} ${lx - 3} ${y + 11}`} color={color} />
        <Arm d={`M${rx - 3} ${y + 1} Q ${rx + 2} ${y + 5} ${rx + 3} ${y + 11}`} color={color} />
      </>
    )
  }
  return (
    <>
      <Arm d={`M${lx + 2} ${y} Q ${lx - 5} ${y + 3} ${lx - 8} ${y + 9}`} color={color} />
      <Arm d={`M${rx - 2} ${y} Q ${rx + 5} ${y + 3} ${rx + 8} ${y + 9}`} color={color} />
    </>
  )
}

function Legs({ y, color }: { y: number; color: string }) {
  return (
    <g>
      <path d={`M42 ${y} L41 ${y + 9}`} stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d={`M54 ${y} L55 ${y + 9}`} stroke={color} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="40" cy={y + 10.5} rx="4.6" ry="2.5" fill={color} />
      <ellipse cx="56" cy={y + 10.5} rx="4.6" ry="2.5" fill={color} />
    </g>
  )
}

function GroundShadow({ id, cx = 48, cy = 91, rx = 21, ry = 4.2 }: { id: string; cx?: number; cy?: number; rx?: number; ry?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id})`} />
}

function Gloss({ x, y, rx, ry, rot = 0, id }: { x: number; y: number; rx: number; ry: number; rot?: number; id: string }) {
  return (
    <g transform={rot ? `rotate(${rot} ${x} ${y})` : undefined}>
      <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id})`} />
      <circle cx={x + rx * 0.45} cy={y - ry * 0.5} r={1.8} fill="#FFFFFF" opacity="0.9" />
    </g>
  )
}

/* ============ Personajes ============ */

export function Strawberry({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#FF9DB0" mid="#FF4D6D" deep="#E32C52" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={90} />
      <Legs y={76} color="#C7294A" />
      <rect x="46.6" y="5" width="3" height="11" rx="1.5" fill="#7A4B2A" />
      <ellipse cx="36" cy="18" rx="8.5" ry="4.4" transform="rotate(-38 36 18)" fill={`url(#${g('l')})`} />
      <ellipse cx="60" cy="18" rx="8.5" ry="4.4" transform="rotate(38 60 18)" fill={`url(#${g('l')})`} />
      <ellipse cx="29" cy="26" rx="7" ry="3.6" transform="rotate(-62 29 26)" fill={`url(#${g('l')})`} />
      <ellipse cx="67" cy="26" rx="7" ry="3.6" transform="rotate(62 67 26)" fill={`url(#${g('l')})`} />
      <ellipse cx="48" cy="14.5" rx="9.5" ry="4.8" fill={`url(#${g('l')})`} />
      <path
        d="M48 20C32 20 21 29 21 43c0 18 13 31 27 35 14-4 27-17 27-35 0-14-11-23-27-23Z"
        fill={`url(#${g('b')})`}
      />
      <Gloss id={g('hl')} x={33} y={33} rx={9.5} ry={6.5} rot={-22} />
      <g fill="#FFD9E1" opacity="0.9">
        <circle cx="27" cy="38" r="1.7" />
        <circle cx="69" cy="38" r="1.7" />
        <circle cx="24" cy="52" r="1.7" />
        <circle cx="72" cy="52" r="1.7" />
        <circle cx="31" cy="65" r="1.7" />
        <circle cx="65" cy="65" r="1.7" />
        <circle cx="48" cy="72" r="1.7" />
      </g>
      <Arms cx={48} y={48} span={26} color="#C7294A" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={46} dx={12} r={5} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

export function Watermelon({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('f')} hi="#FF97A6" mid="#FF5068" deep="#E63A57" />
        <BodyGrad id={g('r')} hi="#7FDE92" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={69} rx={28} ry={4.4} />
      <path d="M16 34a32 32 0 0 0 64 0Z" fill={`url(#${g('r')})`} />
      <path d="M20.5 34a27.5 27.5 0 0 0 55 0Z" fill="#F1FFE3" />
      <path d="M23.5 34a24.5 24.5 0 0 0 49 0Z" fill={`url(#${g('f')})`} />
      <Gloss id={g('hl')} x={35} y={26} rx={8.5} ry={4.8} rot={-16} />
      <g fill="#43302B">
        <circle cx="27" cy="50" r="1.4" />
        <circle cx="69" cy="50" r="1.4" />
        <circle cx="38" cy="56" r="1.4" />
        <circle cx="58" cy="56" r="1.4" />
      </g>
      <Arms cx={48} y={40} span={30} color="#1F9450" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={42} dx={11} r={4.8} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

export function Orange({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#FFC46B" mid="#FF9418" deep="#E67B05" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={87} />
      <Legs y={73} color="#D97A06" />
      <rect x="46.7" y="7" width="2.8" height="8" rx="1.4" fill="#7A4B2A" />
      <ellipse cx="57" cy="12" rx="8" ry="3.8" transform="rotate(24 57 12)" fill={`url(#${g('l')})`} />
      <circle cx="48" cy="44" r="30" fill={`url(#${g('b')})`} />
      <Gloss id={g('hl')} x={36} y={31} rx={9.5} ry={6.5} rot={-20} />
      <Arms cx={48} y={50} span={29} color="#D97A06" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={42} dx={12} r={5} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

export function OrangeSlice({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  const wedges = [0, 60, 120, 180, 240, 300]
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('p')} hi="#FFC46B" mid="#FF9418" deep="#E67B05" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={85} />
      <Legs y={71} color="#E8820A" />
      <circle cx="48" cy="42" r="30" fill={`url(#${g('p')})`} />
      <circle cx="48" cy="42" r="25.5" fill="#FFE3B3" />
      <g fill="#FFAB2E">
        {wedges.map((deg) => (
          <path key={deg} d="M48 42 43.4 24.6a18.5 18.5 0 0 1 9.2 0Z" transform={`rotate(${deg} 48 42)`} />
        ))}
      </g>
      <circle cx="48" cy="42" r="3" fill="#FFE3B3" />
      <circle cx="48" cy="42" r="13.5" fill="#FFEBC4" opacity="0.92" />
      <Gloss id={g('hl')} x={35} y={28} rx={8.5} ry={5.5} rot={-20} />
      <Arms cx={48} y={48} span={29} color="#E8820A" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={40} dx={10.5} r={4.6} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} blushDx={15} />
    </FruitSvg>
  )
}

export function OrangeClock({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#FFC46B" mid="#FF9418" deep="#E67B05" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={86} />
      <Legs y={72} color="#D97A06" />
      <rect x="46.7" y="6" width="2.8" height="8" rx="1.4" fill="#7A4B2A" />
      <ellipse cx="57" cy="11" rx="8" ry="3.8" transform="rotate(24 57 11)" fill={`url(#${g('l')})`} />
      <circle cx="48" cy="44" r="29" fill={`url(#${g('b')})`} />
      <Gloss id={g('hl')} x={36} y={30} rx={9} ry={6} rot={-20} />
      <Arms cx={48} y={48} span={28} color="#D97A06" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={34} dx={10.5} r={4.4} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
      <g>
        <circle cx="48" cy="60" r="10.5" fill="#FFF4DE" stroke="#E8A25B" strokeWidth="2.4" />
        <g fill="#E8A25B">
          <circle cx="48" cy="52.8" r="0.9" />
          <circle cx="55.2" cy="60" r="0.9" />
          <circle cx="48" cy="67.2" r="0.9" />
          <circle cx="40.8" cy="60" r="0.9" />
        </g>
        <path d="M48 60V54.5" stroke="#4A2E2A" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 60l-3.5 2" stroke="#4A2E2A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="60" r="1.4" fill="#4A2E2A" />
      </g>
    </FruitSvg>
  )
}

export function Lemon({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#FFF6A6" mid="#FFE13B" deep="#F2C400" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={83} />
      <Legs y={69} color="#E0B400" />
      <rect x="47" y="16" width="2.6" height="7" rx="1.3" fill="#7A4B2A" />
      <ellipse cx="56" cy="19" rx="7.6" ry="3.6" transform="rotate(26 56 19)" fill={`url(#${g('l')})`} />
      <circle cx="16.5" cy="49" r="4.8" fill={`url(#${g('b')})`} />
      <circle cx="79.5" cy="49" r="4.8" fill={`url(#${g('b')})`} />
      <ellipse cx="48" cy="49" rx="29" ry="21" fill={`url(#${g('b')})`} />
      <Gloss id={g('hl')} x={36} y={38} rx={10} ry={6} rot={-16} />
      <Arms cx={48} y={52} span={28} color="#E0B400" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={46} dx={12.5} r={5} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

export function Grapes({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  const berries: Array<[number, number, number]> = [
    [29, 40, 12],
    [48, 33, 12],
    [67, 40, 12],
    [35, 54, 12.5],
    [61, 54, 12.5],
    [48, 62, 14],
  ]
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#B58CF2" mid="#8252CE" deep="#6A3EB2" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={89} />
      <Legs y={75} color="#6A3EB2" />
      <path d="M48 20c.4-5 2-8.4 4.6-11" fill="none" stroke="#7A4B2A" strokeWidth="3.2" strokeLinecap="round" />
      <ellipse cx="58" cy="14" rx="8" ry="3.8" transform="rotate(28 58 14)" fill={`url(#${g('l')})`} />
      {berries.map(([cx, cy, r]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={r} fill={`url(#${g('b')})`} />
          <circle cx={cx - r * 0.32} cy={cy - r * 0.36} r={r * 0.2} fill="#FFFFFF" opacity="0.75" />
        </g>
      ))}
      <Gloss id={g('hl')} x={43} y={55} rx={5} ry={3.2} rot={-24} />
      <Arms cx={48} y={56} span={22} color="#6A3EB2" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={60} dx={8} r={4.2} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} blushDx={10.5} />
    </FruitSvg>
  )
}

export function Apple({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#FF9077" mid="#FF5A4E" deep="#DE3B31" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={89} />
      <Legs y={75} color="#C93A2E" />
      <path d="M48 18c.4-4.6 2.2-7.6 5-9.6" fill="none" stroke="#7A4B2A" strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="59" cy="11" rx="8" ry="3.8" transform="rotate(24 59 11)" fill={`url(#${g('l')})`} />
      <path
        d="M48 20c-8-6-20-4-24 6-4 10 0 26 6 36 6 10 12 16 18 16s12-6 18-16c6-10 10-26 6-36-4-10-16-12-24-6Z"
        fill={`url(#${g('b')})`}
      />
      <Gloss id={g('hl')} x={34} y={34} rx={9} ry={6.5} rot={-18} />
      <Arms cx={48} y={50} span={25} color="#C93A2E" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={46} dx={12} r={5.2} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

export function Pear({ pose, ...props }: FruitProps & { pose?: FruitPose }) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg {...props}>
      <defs>
        <BodyGrad id={g('b')} hi="#E2EF7E" mid="#A8D44B" deep="#7FB534" />
        <BodyGrad id={g('l')} hi="#8CE8A5" mid="#35B768" deep="#1E9A50" />
        <GlossGrad id={g('hl')} />
        <ShadowGrad id={g('sh')} />
        <BlushGrad id={g('bl')} />
      </defs>
      <GroundShadow id={g('sh')} cy={92} ry={3.8} />
      <Legs y={78} color="#7FAE2E" />
      <path d="M48 14c.2-3 1.4-5.2 3.4-7" fill="none" stroke="#7A4B2A" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="57" cy="10" rx="7.2" ry="3.4" transform="rotate(26 57 10)" fill={`url(#${g('l')})`} />
      <path
        d="M48 14c-2 11-9 17-15 25-5 7-7 13-7 19a22 22 0 0 0 44 0c0-6-2-12-7-19-6-8-13-14-15-25Z"
        fill={`url(#${g('b')})`}
      />
      <Gloss id={g('hl')} x={37} y={54} rx={7.5} ry={9} rot={-10} />
      <Arms cx={48} y={54} span={21} color="#7FAE2E" pose={pose?.arms ?? 'down'} />
      <Face blushId={g('bl')} x={48} y={52} dx={11.5} r={5} mood={pose?.mood ?? 'open'} mouth={pose?.mouth ?? 'smile'} />
    </FruitSvg>
  )
}

/* ============ Decoración ============ */

export function Squiggle(props: FruitProps) {
  return (
    <FruitSvg viewBox="0 0 220 22" {...props}>
      <path
        d="M6 13c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 40-2"
        fill="none"
        stroke="#F2BC0F"
        strokeWidth="9.5"
        strokeLinecap="round"
      />
      <path
        d="M6 13c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 40-2"
        fill="none"
        stroke="#FFD84D"
        strokeWidth="5.5"
        strokeLinecap="round"
        transform="translate(0 -1.6)"
      />
      <path
        d="M6 13c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 40-2"
        fill="none"
        stroke="#FFF3B8"
        strokeWidth="2"
        strokeLinecap="round"
        transform="translate(0 -2.8)"
        opacity="0.9"
      />
    </FruitSvg>
  )
}

function Bubble({ x, y, r, color }: { x: number; y: number; r: number; color: string }) {
  return (
    <g opacity="0.38">
      <circle cx={x} cy={y} r={r} fill={color} opacity="0.55" />
      <circle cx={x - r * 0.28} cy={y - r * 0.3} r={r * 0.42} fill="#FFFFFF" opacity="0.75" />
      <circle cx={x + r * 0.3} cy={y + r * 0.35} r={r * 0.14} fill="#FFFFFF" opacity="0.8" />
    </g>
  )
}

export function Sprinkles(props: FruitProps) {
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg viewBox="0 0 360 640" preserveAspectRatio="xMidYMid slice" {...props}>
      <defs>
        <linearGradient id={g('pill')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE13B" />
          <stop offset="1" stopColor="#F2A20C" />
        </linearGradient>
        <linearGradient id={g('pill2')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B58CF2" />
          <stop offset="1" stopColor="#6A3EB2" />
        </linearGradient>
      </defs>
      <Bubble x={52} y={92} r={7} color="#FF5068" />
      <Bubble x={312} y={118} r={5.5} color="#FF9418" />
      <Bubble x={38} y={420} r={6} color="#8252CE" />
      <Bubble x={326} y={468} r={6.5} color="#35B768" />
      <Bubble x={300} y={562} r={5} color="#FF5068" />
      <Bubble x={64} y={548} r={5} color="#FF9418" />
      <Bubble x={180} y={78} r={5} color="#35B768" />
      <Bubble x={338} y={300} r={4.5} color="#FFD84D" />
      <Bubble x={20} y={300} r={4.5} color="#FFD84D" />
      <g transform="rotate(38 326 380)">
        <rect x="318" y="376.5" width="16" height="7" rx="3.5" fill={`url(#${g('pill')})`} />
        <rect x="320" y="377.8" width="10" height="2.2" rx="1.1" fill="#FFF3B8" opacity="0.85" />
      </g>
      <g transform="rotate(-32 46 512)">
        <rect x="38" y="508.5" width="16" height="7" rx="3.5" fill={`url(#${g('pill2')})`} />
        <rect x="40" y="509.8" width="10" height="2.2" rx="1.1" fill="#E5D4FF" opacity="0.85" />
      </g>
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
  const uid = useFruitId()
  const g = (n: string) => `${uid}-${n}`
  return (
    <FruitSvg viewBox="0 0 400 240" {...props}>
      <defs>
        <BodyGrad id={g('pin')} hi="#FF8FA3" mid="#FF5068" deep="#D93A4E" />
        <GlossGrad id={g('hl')} />
      </defs>
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
      <ellipse cx="210" cy="132" rx="17" ry="4" fill="#4A2E2A" opacity="0.18" />
      <path
        d="M210 130c-14.5-12.5-24-24.5-24-38a24 24 0 1 1 48 0c0 13.5-9.5 25.5-24 38Z"
        fill={`url(#${g('pin')})`}
      />
      <ellipse cx="201" cy="84" rx="6.5" ry="4.2" transform="rotate(-18 201 84)" fill={`url(#${g('hl')})`} />
      <circle cx="210" cy="92" r="9.5" fill="#FFF8E7" />
      <ellipse cx="222" cy="66" rx="7" ry="3.4" transform="rotate(28 222 66)" fill="#35B768" />
      <text x="30" y="62" fill="#A08454" fontSize="12" fontWeight="700">Calle 28</text>
      <text x="128" y="158" fill="#A08454" fontSize="12" fontWeight="700">Calle 2</text>
      <text x="284" y="222" fill="#A08454" fontSize="12" fontWeight="700">Calle 3</text>
      <text x="230" y="86" fill="#D93A4E" fontSize="14" fontWeight="800">Chiquilladas</text>
    </FruitSvg>
  )
}

export function ParadeDivider() {
  return (
    <div className="parade" aria-hidden="true">
      <OrangeSlice width={36} height={36} pose={{ arms: 'wave', mood: 'happy' }} style={{ transform: 'rotate(-6deg)' }} />
      <Strawberry width={42} height={42} pose={{ arms: 'up', mouth: 'cheer' }} style={{ transform: 'rotate(4deg)' }} />
      <Lemon width={40} height={40} pose={{ arms: 'shy' }} style={{ transform: 'rotate(-5deg)' }} />
      <Watermelon width={40} height={40} pose={{ arms: 'down', mood: 'happy' }} style={{ transform: 'rotate(6deg)' }} />
      <Grapes width={36} height={36} pose={{ arms: 'up', mood: 'wink' }} style={{ transform: 'rotate(-4deg)' }} />
      <Apple width={40} height={40} pose={{ arms: 'wave' }} style={{ transform: 'rotate(5deg)' }} />
    </div>
  )
}
