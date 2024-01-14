import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import ParticleBackground from './Components/ParticleBackground'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './index.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    // <div className=' h-full w-full bg-[linear-gradient(90deg,_rgba(53,_31,_150,_1)_0%,_rgba(162,_0,_255,_1)_50%,_rgba(111,_0,_255,_1)_61%)]'>
    <div className='max-md:w-fit sm:min-w-fit h-full w-full bg-inherit text-white'>
      <ParticleBackground/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App