export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
         <div className="flex items-center space-x-6">
          {/* Remove About and Skills links */}
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Projects</a>
          <a href="#articles" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Articles</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </div>
      </nav>
    </header>
  )
}
