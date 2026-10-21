import { classNames } from '../../lib/classNames'

export type SegmentOption<Value extends string> = { value: Value; label: string; accessibleLabel?: string }

type SegmentedControlProps<Value extends string> = {
  label: string
  options: ReadonlyArray<SegmentOption<Value>>
  value: Value
  onChange: (value: Value) => void
}

export function SegmentedControl<Value extends string>({ label, options, value, onChange }: SegmentedControlProps<Value>) {
  return (
    <div role="group" aria-label={label} className="inline-flex gap-1 rounded-pill bg-mist p-1">
      {options.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            aria-label={option.accessibleLabel}
            onClick={() => onChange(option.value)}
            className={classNames(
              'min-h-11 min-w-11 cursor-pointer rounded-pill px-4 text-body-s-strong transition-colors',
              selected ? 'bg-navy text-white' : 'text-slate hover:text-ink',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
