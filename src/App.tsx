
import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <>
      <Navbar onNavigate={setActivePage} />

      {activePage === 'home' && (
        <section id="home">
          <h1>Hi, I'm Dinushi 👋</h1>
          <h2>Welcome to My Portfolio</h2>
          <p>I'm a Software Developer.</p>
        </section>
      )}

      {activePage === 'about' && <About />}
      {activePage === 'skills' && <Skills />}
      {activePage === 'projects' && <Projects />}
    </>
  )
}

export default App
