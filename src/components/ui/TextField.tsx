import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from 'react'
import { classNames } from '../../lib/classNames'
import { Icon } from './Icon'
import type { IconName } from './iconNames'

export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: string
  helper?: string
  error?: string
  leadingIcon?: IconName
  trailing?: ReactNode
  ref?: Ref<HTMLInputElement>
}

export function TextField({ label, helper, error, leadingIcon, trailing, id, className, ref, ...inputAttributes }: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const helperId = helper ? `${inputId}-helper` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined

  return (
    <div className={classNames('flex flex-col gap-2', className)}>
      <label htmlFor={inputId} className="text-body-s-strong text-ink">
        {label}
      </label>
      <div
        className={classNames(
          'flex min-h-13 items-center gap-2.5 rounded-input border-strong bg-white px-4',
          'focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-700',
          error ? 'border-negative' : 'border-line',
        )}
      >
        {leadingIcon && <Icon name={leadingIcon} className="text-slate" />}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className="min-w-0 flex-1 bg-transparent py-3 text-body-m text-ink outline-none"
          {...inputAttributes}
        />
        {trailing}
      </div>
      {error && (
        <p id={errorId} className="flex items-start gap-2 text-body-s-strong text-negative">
          <Icon name="alert" size="inline" className="mt-0.5" />
          <span>{error}</span>
        </p>
      )}
      {helper && (
        <p id={helperId} className="text-caption text-slate">
          {helper}
        </p>
      )}
    </div>
  )
}
