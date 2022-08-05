import { renderWithTheme } from '@/utils/tests'
import { screen } from '@testing-library/react'

import Example from '..'

describe('<Example />', () => {
  it('should render the Example', () => {
    renderWithTheme(<Example />)

    expect(screen.getByTestId('example')).toBeInTheDocument()
  })
})
