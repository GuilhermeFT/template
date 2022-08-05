import { renderWithTheme } from '@/utils/tests'
import { screen } from '@testing-library/react'

import Home from '..'

describe('<Home />', () => {
  it('should renders correctly', () => {
    renderWithTheme(<Home />)

    expect(screen.getByText('Home page')).toBeInTheDocument()
  })
})
