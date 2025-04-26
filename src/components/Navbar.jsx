import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Ayush T.</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</Link>
            <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Projects</Link>
            <Link to="/skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Skills</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-3 py-2">Home</Link>
            <Link to="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-3 py-2">About</Link>
            <Link to="/projects" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-3 py-2">Projects</Link>
            <Link to="/skills" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-3 py-2">Skills</Link>
            <Link to="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-3 py-2">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;