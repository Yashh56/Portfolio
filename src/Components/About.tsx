import { Image } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Skills from './Skills';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const About = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const el = ref.current;
        // if (!el) return; // Add this line to check if el is defined
        gsap.fromTo(el, { scale: 0 }, {
            scale: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: el,
            }
        })
    }, [])
    return (
        <div className='md:h-[60vh]'>
            <div id='animatedSection' className='flex justify-center items-center max-md:text-4xl md:text-6xl'>
                <h1>ABOUT ME</h1>
            </div>
            <div className=" max-md:flex-col md:flex md:items-center w-fit md:justify-center gap-4 mt-4">
                <div ref={ref} className='md:flex justify-center items-center text-center'>
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
                        <p> ⚒️I'm passionate about exploring various facets of the field, including web development,</p>
                        <p>competitive programming, and other related areas.</p>
                        <p>🚀 Currently I am learning different DSA Concepts and working on projects related to MERN Stack.</p>
                        <p>✨ I also Contributed in Hacktoberfest 2023.</p>
                        <p>🌻 I am actively searching for a full-time position or internship that aligns with my skills and </p>
                        <p>career goals, where I can contribute effectively and continue to develop my expertise.</p>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <Skills />
            </div>
        </div>

    )
}

export default About