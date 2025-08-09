import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DarkMode from './contexts/DarkMode.js'
import Intersection from './custom components/Intersection.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Intersection>
      <DarkMode>
        <App />
     </DarkMode>
    </Intersection>
  </StrictMode>
)
