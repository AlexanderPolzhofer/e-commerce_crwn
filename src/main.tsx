import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Global, css } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          font-family: 'Roboto Condensed';
        }
      `}
    />
    <App />
  </React.StrictMode>,
)
