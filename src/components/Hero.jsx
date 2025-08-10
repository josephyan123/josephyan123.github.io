export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Your Name</span></h1>
        <h2 className="text-2xl mb-8">Your Profession/Role</h2>
        <p className="max-w-2xl mx-auto mb-8">A brief introduction about yourself and what you do.</p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700">
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
