import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
// import { lightTheme, darkTheme } from "../src/themes"; // import your custom theme configs

// Load Material UI fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

// const withThemeProvider = (Story: any) => (
//   <MuiThemeProvider theme={theme}>
//     <Story />
//   </MuiThemeProvider>
// )

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: createTheme({ palette: { mode: 'light' } }),
      dark: createTheme({ palette: { mode: 'dark' } }),
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    // GlobalStyles: CssBaseline,
  }),
]

export default preview
