
function Header() {
  return (
    <header className="flex justify-between items-center p-8 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/vite.svg" alt="Vite logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">Anime List</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;