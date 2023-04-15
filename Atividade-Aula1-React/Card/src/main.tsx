import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Card from './Card'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Card /> 
  </React.StrictMode>,
)
