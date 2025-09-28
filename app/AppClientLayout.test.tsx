import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import AppClientLayout from './AppClientLayout'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('AppClientLayout', () => {
  it('renders navigation links', () => {
    render(
      <AppClientLayout>
        <div>Test Child</div>
      </AppClientLayout>
    )

    const nav = screen.getByRole('navigation')

    // Search for links within the navigation landmark
    expect(within(nav).getByText('Services')).toBeInTheDocument()
    expect(within(nav).getByText('Portfolio')).toBeInTheDocument()
    expect(within(nav).getByText('Tarifs')).toBeInTheDocument()
    expect(within(nav).getByText('Devis')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(
      <AppClientLayout>
        <div>Test Child</div>
      </AppClientLayout>
    )

    // Check for a unique text in the footer
    const footerText = screen.getByText(/© 2025 jack.creative.lab. Tous droits réservés./i)
    expect(footerText).toBeInTheDocument()
  })
})
