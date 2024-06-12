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
            <h1 id='animatedSection' className='text-center text-3xl m-4'>ABOUT ME</h1>
            <div className={`flex items-center justify-center ${isVisible ? 'animate-fade-right animate-duration-[1000ms] animate-ease-out' : ' '}`}>
                <div className='flex-col flex justify-center items-center text-left'>
                    <Image
                        className='flex items-center justify-center md:w-96 md:h-96 w-72 h-72'
                        borderRadius='full'
                        boxSize='180px'
                        src='https://i.pinimg.com/564x/37/3f/f4/373ff491701d97ecfded705bc7d9955e.jpg'
                    />
                    <div className='flex-col grid grid-row-3 gap-2 md:w-[80%] md:text-2xl'>
                        <p>🙋‍♂️ I am first-year undergraduate student pursuing a Bachelor's in Computer Science.</p>
                        <p> ⚒️I'm passionate about exploring various facets of the field, including <mark>web development</mark> ,<mark>competitive programming</mark>, and other related areas.</p>
                        <p>🚀 Currently I am exploring Data Structure and Algorithms Concepts and working on Full Stack projects.</p>

                        <p>✨ I also Contributed in various <mark> Open Source</mark> Projects.</p>
                        <p>🐋 I love problem solving and doing competitive programming.</p>
                        <p> 🍁 My hobbies are watching anime,cricket, andreading books .</p>
                    </div>
                    <div className='flex max-md:mt-12 md:mt-12 float-left'>
                        <Link to={'https://drive.google.com/file/d/1qtIjPWox_-LRbyTZ82PzqG6UlimrxeAI/view?usp=drive_link'} target='_blank' >
                            <Button size={'lg'} className='Button'>Resume</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About