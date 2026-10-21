import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion } from './Accordion'

const items = [
  { id: 'first', title: 'When can I start a retirement income?', content: <p>First answer</p> },
  { id: 'second', title: 'Is there a minimum I need to draw?', content: <p>Second answer</p> },
]

describe('Accordion', () => {
  it('starts closed, with each question a button inside a heading', () => {
    render(<Accordion items={items} headingLevel="h3" />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    buttons.forEach((button) => expect(button).toHaveAttribute('aria-expanded', 'false'))
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2)
    expect(screen.queryByText('First answer')).not.toBeVisible()
  })

  it('opens and closes a panel that the button controls', async () => {
    render(<Accordion items={items} />)
    const button = screen.getByRole('button', { name: 'When can I start a retirement income?' })
    const panel = document.getElementById(button.getAttribute('aria-controls')!)!

    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toBeVisible()
    expect(screen.getByRole('region', { name: 'When can I start a retirement income?' })).toHaveTextContent('First answer')

    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).not.toBeVisible()
  })

  it('lets more than one panel stay open', async () => {
    render(<Accordion items={items} />)
    const [first, second] = screen.getAllByRole('button')
    await userEvent.click(first)
    await userEvent.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
