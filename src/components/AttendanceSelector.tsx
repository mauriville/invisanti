import { Minus, Plus } from 'lucide-react'

const MIN_GUESTS = 1
const MAX_GUESTS = 10

interface AttendanceSelectorProps {
  value: number
  onChange: (next: number) => void
}

export function AttendanceSelector({ value, onChange }: AttendanceSelectorProps) {
  return (
    <div className="stepper" role="group" aria-label="Cantidad de asistentes">
      <button
        type="button"
        className="stepper-btn stepper-btn--minus"
        onClick={() => onChange(Math.max(MIN_GUESTS, value - 1))}
        disabled={value === MIN_GUESTS}
        aria-label="Quitar un asistente"
      >
        <Minus size={26} strokeWidth={3} aria-hidden="true" />
      </button>
      <p className="stepper-count">
        <span className="stepper-number" key={value} aria-hidden="true">
          {value}
        </span>
        <span className="stepper-unit">{value === 1 ? 'persona' : 'personas'}</span>
      </p>
      <button
        type="button"
        className="stepper-btn stepper-btn--plus"
        onClick={() => onChange(Math.min(MAX_GUESTS, value + 1))}
        disabled={value === MAX_GUESTS}
        aria-label="Agregar un asistente"
      >
        <Plus size={26} strokeWidth={3} aria-hidden="true" />
      </button>
    </div>
  )
}
