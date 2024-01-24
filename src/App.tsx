import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
// import ParticleBackground from './Components/ParticleBackground'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './index.css'
const App = () => {
  return (
    <div className='max-md:w-fit sm:min-w-fit h-full w-full text-black bg-white dark:bg-black dark:text-white' >
      <Navbar/>
      <Home  />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
    
  )
}

export default App