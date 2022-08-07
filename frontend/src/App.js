import { ThemeProvider, CacheProvider } from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import theme from './core/Theme'
import MainRouter from './route/Routes'
import './App.scss'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
