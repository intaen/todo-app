import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from '/src/components/Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Count />
  </StrictMode>,
)

// StrictMode
// menjaga terjadinya kemungkinan error // untuk membantu memberitahu di mana bagian yang masalah // tidak mempengaruhi UI