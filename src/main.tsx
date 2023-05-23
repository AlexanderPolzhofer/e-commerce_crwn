import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Global, css } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global
        styles={css`
          * {
            font-family: 'Roboto Condensed';
          }
        `}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
