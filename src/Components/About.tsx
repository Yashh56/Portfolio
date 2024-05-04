import { Button, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id='animatedSection' className='flex  bg-[#171717] flex-col justify-center max-md:p-4 items-center'>
            <h1 id='animatedSection' className='text-center text-3xl m-4'>About Me</h1>
            <div className={`flex items-center justify-center ${isVisible ? 'animate-fade-right animate-duration-[1000ms] animate-ease-out' : ' '}`}>
                <div className='flex-col flex justify-center items-center text-left'>
                    <Image
                        className='flex items-center justify-center md:w-96 md:h-96 w-72 h-72'
                        borderRadius='full'
                        boxSize='150px'
                        src='1.jpg'
                        alt='Segun Adebayo'
                    />
                    <div className='flex-col flex-wrap md:w-fit justify-center items-center md:text-2xl'>
                        <p>🙋‍♂️ Hello, I'm Yash, a first-year undergraduate student pursuing a Bachelor's in Computer Science.</p>
                        <p> ⚒️I'm passionate about exploring various facets of the field, including <mark>web development</mark> ,</p>
                        <p><mark>competitive programming</mark>, and other related areas.</p>
                        <p>🚀 Currently I am learning different DSA Concepts and working on projects related to MERN Stack.</p>
                        <p>✨ I also Contributed in <mark> Hacktoberfest 2023</mark>.</p>
                    </div>
                    <div className='flex max-md:mt-12 md:mt-12 float-left'>
                        <Link to={'https://drive.google.com/file/d/106sD2ePacEmWaFaxcPxT1LN-czwDApB9/view?usp=sharing'} target='_blank' >
                            <Button size={'lg'} className='Button'>Resume</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About