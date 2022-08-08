import { ThemeProvider, CacheProvider } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import rtlPlugin from 'stylis-plugin-rtl'
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import WithAuth from './route/WithAuth'
import theme from './core/Theme'
import routes from './route/Routes'
import Toastcontainer from './components/Admin/Toast-Alert/ToastContainer'
import './App.scss'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Routes>
          {routes.map((rout) => (
            rout.isPrivate
              ? (
                <Route
                  key={rout.path}
                  path={rout.path}
                  element={WithAuth(rout.component)}
                />
              ) : (
                <Route
                  key={rout.path}
                  path={rout.path}
                  element={rout.component}
                />
              )))}
        </Routes>
        <Toastcontainer />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
