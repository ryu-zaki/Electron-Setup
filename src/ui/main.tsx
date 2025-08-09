import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DarkMode from './contexts/DarkMode.js';
import WebProjects from './contexts/WebProjects.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <DarkMode>
        <WebProjects>
          <App />  
        </WebProjects>
     </DarkMode>
  </StrictMode>
)
