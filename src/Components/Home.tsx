import { Image } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import { Button } from '@chakra-ui/react'
import { useTypewriter } from 'react-simple-typewriter'
const Home = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Open Source Contributor', 'Student'],
    loop: 0, // or loop: false,
    typeSpeed: 100,
    deleteSpeed: 50,

  })

  
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <div id='home' className='flex bg-transparent sm:flex-row max-md:min-w-fit sm:min-w-fit w-full h-[100vh] justify-center items-center'>
        <div className='max-md:flex-col flex justify-center text-center items-center w-fit'>
          <div className='md:hidden  m-2 animate-bounce'>
            <Image mt={4} bg={'transparent'} borderRadius='full' boxSize='120px' src="1.jpg" />
          </div>
          <div className='max-md:min-w-fit sm:min-w-fit'>
            <p className='text-4xl max-md:min-w-fit sm:min-w-fit animate-fade-up animate-once max-md:text-xl'>Hey, I am YashKumar Saini</p>
            <p className='text-4xl max-md:min-w-fit sm:min-w-fit animate-fade-up max-md:text-xl'> I'm a {text}.</p>
            <Link to='animatedSection' smooth={true} duration={500} offset={-50} className=" text-black">  <Button className='mt-2'>Know More</Button></Link>
          </div>
          <div className='max-md:hidden max-md:min-w-fit sm:min-w-fit md:ml-12'>
            <Image mt={4} bg={'transparent'} borderRadius='full' boxSize='160px' src="1.jpg" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home