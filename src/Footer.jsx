
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
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