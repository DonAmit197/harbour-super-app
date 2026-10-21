import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordField } from './PasswordField'
import { TextField } from './TextField'

describe('TextField', () => {
  it('has a visible label linked to the input and helper text in its description', () => {
    render(<TextField label="Username" helper="Use the demo username shared with you." />)
    const input = screen.getByRole('textbox', { name: 'Username' })
    expect(input).toHaveAccessibleDescription('Use the demo username shared with you.')
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('marks the field invalid and links the error message', () => {
    render(<TextField label="Username" helper="Use the demo username shared with you." error="Enter your username." />)
    const input = screen.getByRole('textbox', { name: 'Username' })
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Enter your username. Use the demo username shared with you.')
  })

  it('accepts typing', async () => {
    render(<TextField label="Username" />)
    const input = screen.getByRole('textbox', { name: 'Username' })
    await userEvent.type(input, 'margaret')
    expect(input).toHaveValue('margaret')
  })
})

describe('PasswordField', () => {
  it('hides the password until the show password toggle is pressed', async () => {
    render(<PasswordField label="Password" />)
    const input = screen.getByLabelText('Password')
    const toggle = screen.getByRole('button', { name: 'Show password' })
    expect(input).toHaveAttribute('type', 'password')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    await userEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'text')
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })
})
