import React from 'react'

import {ThemeProvider} from 'styled-components'

import {render, RenderOptions, RenderResult} from '@testing-library/react'

import {theme} from '@/styles/theme'

interface AllTheProvidersProps {
  children: React.ReactNode
}

function AllTheProviders({children}: AllTheProvidersProps): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function customRender(
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult {
  return render(ui, {wrapper: AllTheProviders, ...options})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
