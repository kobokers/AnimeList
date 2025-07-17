import React, { StrictMode, useState, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export const DarkModeContext = createContext();

function Main() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-purple-100'}`}>
        <Header />
        <main className="flex-grow">
          <App />
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
