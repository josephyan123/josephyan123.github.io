export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
          Your Name
        </a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Projects</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Skills</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}
