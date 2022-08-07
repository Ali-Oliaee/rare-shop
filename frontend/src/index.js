import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from './redux/store'
import App from './App'

const persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </CssBaseline>
    </BrowserRouter>
  </Provider>,
)
