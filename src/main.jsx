import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen bg-purple-900">
      <Header />
      <main className="flex-grow">
        <App />
      </main>
      <Footer />
    </div>
  </StrictMode>
)
