import Navbar from './Components/Navbar'
import AboutMe from './Pages/AboutMe'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-[#171717] text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      </Routes>
    </div>
  )
}

export default App