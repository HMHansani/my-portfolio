
import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="app">

      <Navbar onNavigate={setActivePage} />

      <main className="main-content">

        {activePage === 'home' && (
          <section id="home" className="home">
            <h1>Hi, I'm Dinushi 👋</h1>
            <h2>Welcome to My Portfolio</h2>
            <p>I'm a Software Developer.</p>
          </section>
        )}

        {activePage === 'about' && <About />}
        {activePage === 'skills' && <Skills />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'contact' && <Contact />}

      </main>

      <Footer />

    </div>
  )
}

export default App
