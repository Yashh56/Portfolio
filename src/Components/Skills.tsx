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
        <div className={` container flex justify-center items-center ${isVisible ? 'animate-fade-right animate-duration-[2000ms] animate-ease-out' : ''}`} id='animatedSection1'>
            <div className='md:h-[70vh] max-md:h-[40vh] md:w-fit max-md:w-fit'>
                <div className='max-w-md max-md:w-fit'>
                    <h1 className='text-6xl/10 text-center m-10'>My Skills</h1>
                    <div className=' flex mt-8 flex-wrap text-2xl md:gap-10 max-md:gap-3 justify-center items-center'>
                        <div className='flex gap-2'>
                            <i className="devicon-javascript-plain colored"></i>
                            <p>Javascript</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-typescript-plain colored"></i>
                            <p>Typescript</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-react-original colored"></i>
                            <p>React</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-tailwindcss-plain colored"></i>
                            <p>Tailwind</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-redux-original colored"></i>
                            <p>Redux</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-nodejs-plain colored"></i>
                            <p>Node</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-express-original colored"></i>
                            <p>Express</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-mongodb-plain colored"></i>
                            <p>MongoDB</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-git-plain colored"></i>
                            <p>Git</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-python-plain colored"></i>
                            <p>Python</p>
                        </div>
                        <div className='flex gap-2'>
                            <i className="devicon-java-plain colored"></i>
                            <p>Java</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills