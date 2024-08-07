import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
// import libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
// animate on scroll init and settings
AOS.init({
  duration: 750, 
  once: true,
});

function App() {
  return (
    <main id='app'>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
};

export default App;