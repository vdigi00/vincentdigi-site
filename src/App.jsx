import Nav from './components/Nav'
import Hero from './components/Hero'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 750, 
  once: true,
  disable: function() {
    var maxWidth = 640;
    return window.innerWidth < maxWidth;
  }
});

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Projects />
      <Skills />
    </div>
  )
}

export default App