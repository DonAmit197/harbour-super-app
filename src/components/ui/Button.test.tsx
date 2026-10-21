import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Button } from './Button'
import { ButtonLink } from './ButtonLink'
import { FutureLink } from './FutureLink'

describe('Button', () => {
  it('is a button with its label as the accessible name', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Log in</Button>)
    const button = screen.getByRole('button', { name: 'Log in' })
    expect(button).toHaveAttribute('type', 'button')
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('keeps the name clean when it shows an arrow', () => {
    const { container } = render(<Button withArrow>Continue</Button>)
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('maps variants and sizes to token classes', () => {
    render(
      <>
        <Button variant="accent" size="small">
          Retirement Manager
        </Button>
        <Button variant="secondary" fullWidth>
          Join
        </Button>
      </>,
    )
    expect(screen.getByRole('button', { name: 'Retirement Manager' })).toHaveClass('bg-sun', 'text-navy', 'min-h-11')
    expect(screen.getByRole('button', { name: 'Join' })).toHaveClass('border-teal-700', 'min-h-12', 'w-full')
  })
})

describe('ButtonLink and FutureLink', () => {
  it('are links, and unbuilt destinations go to the 404 page', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/login">Log in to your account</ButtonLink>
        <ButtonLink>Compare our options</ButtonLink>
        <FutureLink>Fees and costs</FutureLink>
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Log in to your account' })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: 'Compare our options' })).toHaveAttribute('href', '/not-found')
    expect(screen.getByRole('link', { name: 'Fees and costs' })).toHaveAttribute('href', '/not-found')
  })
})
