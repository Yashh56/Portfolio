import { Link } from 'react-scroll'
import { Link as Link1 } from 'react-router-dom'
import { IoIosArrowUp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGithub, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex max-md:w-full  sm:min-w-fit justify-center items-center h-[40vh]">
      <div>
        <div className='flex items-center justify-center text-2xl '>
          <h2 className='dark:text-white text-center animate-fade-up'>
            <Link to='home' smooth={true} duration={600} offset={-50} className="m-2 animate-fade-up animate-infinite dark:text-white">
              <IoIosArrowUp />
            </Link>
          </h2>
        </div>

        <h1 className='text-center text-3xl dark:text-white'>FIND ME ON</h1>
        <h1 className='text-center text-2xl dark:text-white'>Feel Free To Connect With Me </h1>

        <div className='mt-2 dark:text-white flex justify-evenly'>
          <Link1 target='_blank' to='https://github.com/Yashh56'>
            <p className=' dark:text-white'><SiGithub size={25} /></p>
          </Link1>
          <Link1 target='_blank' to='https://www.linkedin.com/in/yash596/'>
            <i className=" devicon-linkedin-plain colored"></i>
          </Link1>
          <Link1 target='_blank' to='https://twitter.com/Yashh596'>
            <p className=' dark:text-white'><FaSquareXTwitter size={25} /></p>
          </Link1>
          <Link1 target='_blank' to='https://leetcode.com/yashsaini18166/'>
            <p className=' dark:text-white'><SiLeetcode size={25} /></p>
          </Link1>
          <Link1 target='_blank' to='https://auth.geeksforgeeks.org/user/yashh596'>
            <p className='text-green-500 dark:text-green-500'><SiGeeksforgeeks size={25} /></p>
          </Link1>
        </div>
        <p className=" justify-center text-center mt-10">© YashKumar Saini 2024</p>

      </div>
    </div>
  )
}
export default Footer