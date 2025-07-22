import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render( // En esta parte le agregamos el signo de adminiracion para indicarle a typescript que esa parte de codigo aseguramos que sera diferente de null
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
