import GlobalStyles from './../components/GlobalStyles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D68021',
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#E6B891',
      },
    },
  },
})

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
)

export default App
