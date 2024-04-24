import { Image, Text } from '@chakra-ui/react'
import { SiPrisma } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div className='flex justify-center bg-[#171717] items-center h-screen w-full'>
      <div>
        <h1 className='text-center m-4 text-3xl'>ABOUT ME</h1>
        <div className='text-xl'>
        <p>
          ▫️ Hii Everyone, My name is Yash Saini
          </p>
          <p>
          ▫️  I'm a first-year undergraduate student pursuing a Bachelor's in Computer Science.
          </p>
          <p>
          ▫️ I am a <Text as='mark'>Full Stack Developer</Text> and currently I am exploring web3,new blockchain technologies and data structures and algorithms.
          </p>
          <p>
          ▫️ I am also a <Text as='mark'>competitive programmer</Text> and I have participated in various competitions.
          </p>
          <p>
          ▫️ I am also looking for internships and opportunities to work with amazing people.
          </p>
          {/* <p>
          ▫️ My Rating on Codeforces: 1156
          </p> */}
          <p>
          ▫️ My Rating on LeetCode: 1586
          </p>
        </div>
        <h1 className='md:mt-2 md:text-3xl max-md:text-2xl md:m-4'>
          Tech Stack I am familiar with:
        </h1>
        <div className='flex flex-wrap max-md:text-sm gap-2 ml-4'>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-express-original"></i>
          <i className="devicon-nextjs-plain"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <i className='text-white'><SiPrisma /></i>
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-docker-plain colored"></i>
          </div>

        <h1 className='md:text-3xl max-md:text-2xl md:mt-2 md:m-4'>
          Platforms I use for Competitive Programming:
        </h1>
        <div className='flex'>
          <Link to='https://leetcode.com/yashsaini18166/' target='_blank'>
            <Image src="LeetCode.svg" alt="LeetCode" width='20' height='10' />
          </Link>
          {/* <Link to='https://codeforces.com/profile/Yashh56' target='_blank'>
            <Image src="codeforces.svg" alt="Codeforces" width='20' height='10' />
          </Link> */}
          </div>
      </div>
    </div>
  )
}
