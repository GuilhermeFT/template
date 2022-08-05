import { ThemeProvider } from 'styled-components'

import theme from '@/styles/themes'
import { render, RenderResult } from '@testing-library/react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
