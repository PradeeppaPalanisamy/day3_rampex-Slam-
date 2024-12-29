import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Slam from './Slam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slam />
  </StrictMode>,
)
