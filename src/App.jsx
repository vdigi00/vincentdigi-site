import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import libraries
import { register } from 'swiper/element/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
// registers swiper
register();
// animate on scroll init and settings
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
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App