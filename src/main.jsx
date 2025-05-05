import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import store from './slices/reducer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router basename={import.meta.env.VITE_BASE_URL}>
        <App />
      </Router>
    </Provider>
  </StrictMode>
)
