
import React, { useContext } from 'react';
import { DarkModeContext } from './main';

function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <header className={`flex justify-between items-center p-8 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex items-center">
        <img src="/vite.svg" alt="Vite logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">Anime List</h1>
      </div>
      <div className="flex items-center gap-4">
        <form onSubmit={HandleSearch} className={`md:block rounded-full p-2 flex items-center gap-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
          <div className="flex items-center w-full">
            <input type="text" name="query" placeholder="Search..." className={`p-2 focus:outline-none rounded-full flex-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`} />
            <button type="submit" className="ml-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white rounded-full p-2 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400">
              <img src="https://img.icons8.com/?size=100&id=0JEKUKZDwD5X&format=png&color=ffffff" alt="Search Icon" className="inline-block h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-4 items-center">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li>
            {/* Dark Mode Slider Switch */}
            <label className="flex items-center cursor-pointer select-none ml-2">
              <span className="mr-2 text-sm">{darkMode ? '🌙' : '☀️'}</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode((prev) => !prev)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner peer-checked:bg-purple-600 transition-colors"></div>
                <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
              </div>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function HandleSearch(e) {
  e.preventDefault();
  const query = e.target.query.value.trim();
  if (query) {
    // Implement search functionality here
    console.log(`Searching for: ${query}`);
  } else {
    console.log('Search query is empty');
  }
  e.target.reset(); // Reset the form after submission
}

export default Header;