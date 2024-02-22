import Topnav from './components/Topnav'
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Topnav />
      <Sidenav />
      <Hero />
      <Main />
      <Projects />
      <Skills />
    </div>
  )
}

export default App