import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'
import { iconNames } from './iconNames'

describe('Icon', () => {
  it('is hidden from screen readers when decorative', () => {
    const { container } = render(<Icon name="bell" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('is announced as an image when it has a label', () => {
    render(<Icon name="bell" label="Notifications" />)
    expect(screen.getByRole('img', { name: 'Notifications' })).toBeInTheDocument()
  })

  it('renders every icon in the set', () => {
    expect(iconNames).toHaveLength(41)
    iconNames.forEach((name) => {
      const { container, unmount } = render(<Icon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
      unmount()
    })
  })
})
