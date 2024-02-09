import { useEffect, useState } from 'react';
const Skills = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust this value based on when you want the animation to start
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
        <div className='flex md:w-full h-[20vh] max-md:mt-8 max-md:w-fit justify-center items-center text-center'>
            <div className={`container ${isVisible ? 'animate-fade-right animate-duration-[1000ms] animate-ease-out' : ' '}`}>
                <h1 className='text-5xl/10 text-center m-4'>My Skills</h1>
                <div className='flex justify-center items-center mt-4'>
                    <div className='flex flex-wrap gap-4 text-4xl justify-center items-center'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" className='h-12 w-12' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" className='h-12 w-12' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills