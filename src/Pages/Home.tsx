import { Link } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'


const CenteredText = ({ text }: any) => {
  return (
    <div className="flex justify-center md:justify-start items-center h-screen">
      <div className="text-center md:text-left md:ml-12 lg:ml-16 xl:ml-20">
        <p className="mb-4 md:text-6xl text-4xl">Hey there, I am Yash</p>
        <p className='mb-4 md:text-6xl text-4xl'>I'm a {text}</p>
        <div className="mt-4 flex flex-col md:flex-row md:items-start md:ml-72 space-y-4 md:space-y-0 md:space-x-4">
          <Link to="https://github.com/Yashh56" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </Link>
          <Link to="https://www.linkedin.com/in/yash596/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn
          </Link>
          <Link to="https://twitter.com/Yashh596" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            X
          </Link>
          <Link to={'https://drive.google.com/file/d/1h2SgEFxG_-IB-zSurat5McJfxw0Lc0HB/view?usp=sharing'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Resume
          </Link>
        </div>
      </div>
    </div>

  )
}
const Home = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Open Source Contributor', 'Tech Enthusiast',],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,

  })
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <CenteredText text={text} />
    </div>

  )
}

export default Home