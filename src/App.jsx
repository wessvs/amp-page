import './App.css'
import Footer from './components/Footer'
import Benefits from './components/Benefits'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Section from './components/Section'

function App() {
  const navItems = [
    // {link: "Artista", path: "artista"},
    // {link: "Auto-cuidado", path: "auto-cuidado"},
    // {link: "Tarot", path: "tarot"},
    // {link: "Contato", path: "contato"},
]

  return (
    <>
      <Navbar navItems={navItems} />
      <Home />
      <Section />
      <Benefits />
      <Footer navItems={navItems} />
    </>
  )
}

export default App
