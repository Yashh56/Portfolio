import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className=' h-fit w-fit  dark:bg-[#171717] dark:text-white'>
      <Navbar/>
      <Home/>
      <About/>
      <div className='max-md:hidden'>
      <Skills/>
      </div>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App