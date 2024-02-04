import { useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { Button } from '@chakra-ui/react'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Open Source Contributor', 'Tech Enthusiast',],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,

  })
  return (

    <div id='home' className="h-screen w-full flex items-center text-center max-md:justify-center md:justify-start md:p-40">
      <div className=' max-md:text-center animate-fade-up animate-once'>
        <div className='text-center justify-center items-center'>
          <h1 className="max-md:text-4xl md:text-8xl font-bold inline">Hi, my name is <p className='inline'>Yash</p> </h1>
          <div className=''>
          <h2 className="max-md:text-3xl mt-3 md:text-7xl fixed">I'm a {text}</h2>
        
          </div>
        </div>
        <div className='flex items-center justify-center mt-40'>
          <Link to='animatedSection' smooth={true}  duration={500} offset={-50}>
            <Button size={'lg'} className='Button'>Know More</Button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home