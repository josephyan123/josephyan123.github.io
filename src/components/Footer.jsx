export default function Footer({ simplified }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {!simplified && (
          /* This whole block will be hidden */
          <div className="flex justify-center space-x-4 mb-4">
            {/* Social media links would be here */}
          </div>
        )}
        <div className="mt-4 pt-4 border-t border-gray-700 text-gray-400">
          <p>© {currentYear} Josephyan123. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
