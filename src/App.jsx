import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './assets/styles/main.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
	<Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
