import { Link } from 'react-scroll'
import { Link as Link1 } from 'react-router-dom'
import { IoIosArrowUp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="flex max-md:w-full sm:min-w-fit justify-center items-center  h-[40vh]">
            <div>
                <div className='flex items-center justify-center text-2xl '>
                    <h2 className='text-center animate-fade-up'>
                        <Link to='home' smooth={true} duration={600} offset={-50} className="m-2 animate-fade-up animate-infinite text-white">
                            <IoIosArrowUp />
                        </Link>
                    </h2>
                </div>

                <h1 className='text-center text-3xl text-white'>FIND ME ON</h1>
                <h1 className='text-center text-2xl text-white'>Feel Free To Connect With Me </h1>

                <div className='mt-2 flex justify-evenly'>
                    <Link1 target='_blank' to='https://github.com/Yashh56'>
                        <i className="devicon-github-original"></i>
                    </Link1>
                    <Link1 target='_blank' to='https://www.linkedin.com/in/yash596/'>
                        <i className="devicon-linkedin-plain colored"></i>
                    </Link1>
                    <Link1 target='_blank' to='https://twitter.com/Yashh596'>
                        <i className=''><FaSquareXTwitter /></i>
                    </Link1>
                    <Link1 target='_blank' to="https://mail.google.com/mail/u/0/?fs=1&to=yashasaini18166@gmail.com&tf=cm">
                        <i className=''><IoMail /></i>
                        </Link1>
                  

                </div>
            </div>
        </div>
    )
}

export default Footer