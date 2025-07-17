
import React, { useContext } from 'react';
import { DarkModeContext } from './main';

function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={`p-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Anime List. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Made with ❤️ by Akmal192003
      </p>
    </footer>
  );
}

export default Footer;