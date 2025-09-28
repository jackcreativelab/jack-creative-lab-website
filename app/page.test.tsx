import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)

    // The main heading has complex, morphing text.
    // We'll look for a stable part of the text.
    const heading = screen.getByRole('heading', {
      name: /pour PME ambitieuses/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the main call-to-action button', () => {
    render(<HomePage />)

    const ctaButton = screen.getByRole('button', { name: /Réserver un appel/i })
    expect(ctaButton).toBeInTheDocument()
  })
})
