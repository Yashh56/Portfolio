import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Projects from './Components/Projects'
import './index.css'

const App = () => {
  return (
    // <div className=' h-full w-full bg-[linear-gradient(90deg,_rgba(53,_31,_150,_1)_0%,_rgba(162,_0,_255,_1)_50%,_rgba(111,_0,_255,_1)_61%)]'>
    <div className='max-md:w-fit sm:min-w-fit h-full w-full bg-black text-white'>

      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App