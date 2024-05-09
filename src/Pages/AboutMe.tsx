import { Image, Text } from '@chakra-ui/react'
import { SiPrisma } from 'react-icons/si'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className='max-md:h-[120vh] md:h-[100vh] w-full flex items-center justify-center'>
      <div className=''>
        <h1 className='text-center text-4xl'>ABOUT ME</h1>

        <div className='flex-col mt-4 md:text-xl'>
          <p className='mt-3'>
            ▫️ Hii Everyone, My name is Yash Saini
          </p>
          <p className='mt-3'>
            ▫️  I'm a first-year undergraduate student pursuing a Bachelor's in Computer Science.
          </p>
          <p className='mt-3'>
            ▫️ I am a <Text as='mark'>Full Stack Developer</Text> and currently I am exploring new blockchain technologies and data structures and algorithms.
          </p>
          <p className='mt-3'>
            ▫️ I am also a <Text as='mark'>competitive programmer</Text> and I have participated in various competitions.
          </p>
          <p className='mt-3'>
            ▫️ I also contribute to open source project called  <Link className='hover:cursor-pointer hover:underline' to={'https://github.com/devicons/devicon'}>Devicons</Link>.
          </p>
          <p className='mt-3'>
            ▫️ I am also looking for internships and opportunities to work with amazing people.
          </p>
          <p className='mt-3'>
            ▫️ My Highest Rating on LeetCode: 1746
          </p>
        </div>
        <div>
          <h1 className='text-3xl mt-8'> Tech Stack I am familiar with:</h1>
          <div className='flex max-md:justify-evenly flex-wrap gap-4'>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-solidity-plain"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className='text-white'><SiPrisma /></i>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-git-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
          </div>
        </div>
        <div className='mt-6'>
          <h1 className='text-2xl'>Platforms I use for Competitive Programming</h1>
        <div>
        <Link to='https://leetcode.com/yashsaini18166/' target='_blank'>
            <Image src="LeetCode.svg" alt="LeetCode" width='20' height='10' />
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe