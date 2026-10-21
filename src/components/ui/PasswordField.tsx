import { useState } from 'react'
import { Icon } from './Icon'
import { TextField, type TextFieldProps } from './TextField'

type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'trailing'>

export function PasswordField({ leadingIcon = 'lock', autoComplete = 'current-password', ...fieldProps }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)

  return (
    <TextField
      {...fieldProps}
      type={visible ? 'text' : 'password'}
      leadingIcon={leadingIcon}
      autoComplete={autoComplete}
      trailing={
        <button
          type="button"
          aria-label="Show password"
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
          className="-mr-2 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-pill text-slate hover:text-ink"
        >
          <Icon name="eye" />
        </button>
      }
    />
  )
}
