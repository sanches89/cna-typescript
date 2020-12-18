import {ThemeProvider} from 'styled-components'

import {theme} from '../src/styles/theme'

import 'modern-css-reset/dist/reset.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
