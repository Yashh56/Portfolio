import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
// import ParticleBackground from './Components/ParticleBackground'
// import ParticleBackground from './Components/ParticleBackground'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './index.css'
const App = () => {
  return (
    <div className='max-md:w-fit sm:min-w-fit h-full w-full text-white bg-[linear-gradient(_45deg,_hsl(240deg_100%_20%)_0%,_hsl(260deg_100%_23%)_11%,_hsl(279deg_100%_27%)_22%,_hsl(298deg_100%_30%)_33%,_hsl(318deg_100%_33%)_44%,_hsl(337deg_100%_37%)_56%,_hsl(357deg_100%_40%)_67%,_hsl(16deg_100%_43%)_78%,_hsl(36deg_100%_47%)_89%,_hsl(55deg_100%_50%)_100%)]   dark:bg-black dark:text-white' >
      {/* <Navbar/> */}
      <Home  />
      {/* <ParticleBackground/> */}
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
    
  )
}

export default App