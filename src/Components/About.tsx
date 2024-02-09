import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 70) { // Adjust this value based on when you want the animation to start
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
        <div className={`md:h-[60vh]`}>
            <div className={`container ${isVisible ? 'animate-fade-right animate-duration-[1000ms] animate-ease-out' : ' '}`}>
                <div id='animatedSection' className='flex justify-center items-center max-md:text-4xl md:text-6xl'>
                    <h1>ABOUT ME</h1>
                </div>
                <div className=" max-md:flex-col md:flex md:items-center w-fit md:justify-center gap-4 mt-4">
                    <div className='md:flex justify-center items-center text-center'>
                        <div className='justify-center items-center flex'>
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src='12.jpg'
                                alt='Dan Abramov'
                            />
                        </div>
                        <div className='md:w-[65%] md:flex md:ml-12 flex-wrap'>
                            <p>🙋‍♂️ Hello, I'm Yash, a first-year undergraduate student pursuing a Bachelor's in Computer Science.</p>
                            <br />
                            <p> ⚒️I'm passionate about exploring various facets of the field, including <Text as='mark'>web development</Text> ,</p>
                            <p><Text as='mark'>competitive programming</Text>, and other related areas.</p>
                            <p>🚀 Currently I am learning different DSA Concepts and working on projects related to MERN Stack.</p>
                            <p>✨ I also Contributed in <Text as='mark'> Hacktoberfest 2023</Text>.</p>
                            <p>🌻 I am actively searching for a full-time position or internship that aligns with my skills and
                                <p className='md:hidden inline'>career goals, where I can contribute effectively and continue to develop my expertise.</p></p>
                            <p className=' max-md:hidden'>career goals, where I can contribute effectively and continue to develop my expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About