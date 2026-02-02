// Main.jsx används för att "starta" appen. Routing görs i app.jsx för strukturens skull

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Kopplar React till root elementet i index.html, startar och renderar ut App i elementet
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
