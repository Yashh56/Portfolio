import { useEffect, useState } from 'react';
// import { Progress } from '@chakra-ui/react'
const Skills = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set isVisible to true if the section is in the viewport
            setIsVisible(isElementInViewport());
        };

        const isElementInViewport = () => {
            const element = document.getElementById('animatedSection1');
            if (!element) return false;

            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check on component mount
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=' flex justify-center items-center' id='animatedSection1'>
            {/* <div className='mt-8 bg-transparent'>
                <div id="animatedSection1" className={`section ${isVisible ? 'animate' : ''}`}>
                    <h1 className='text-4xl text-center  dark:text-white max-md:text-2xl '>SKILLS</h1>
                    <div className='flex max-md:flex justify-center items-center mt-2 gap-2'>
                        <div className='flex max-md:flex-col sm:flex-col'>
                            <i id='i' className="devicon-javascript-plain colored"></i>
                            <i id='i' className="devicon-typescript-plain colored"></i>
                        </div>
                        <div className='flex flex-col'>
                            <i id='i' className="devicon-react-original colored"></i>
                            <i id='i' className="devicon-tailwindcss-plain colored"></i>
                        </div>
                        <div className='flex flex-col'>
                            <i id='i' className="devicon-nodejs-plain colored"></i>
                            <i id='i' className="devicon-express-original colored"></i>
                        </div>
                        <div className='flex flex-col'>
                            <i id='i' className="devicon-mongodb-plain-wordmark colored"></i>
                            <i id='i' className="devicon-python-plain colored"></i>

                        </div>
                        <div className='flex flex-col'>
                            <i id='i' className="devicon-git-plain colored"></i>
                            <i id='i' className="devicon-vscode-plain colored"></i>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className='h-fit md:w-[100vh] max-md:w-fit'>
                <div className={`section ${isVisible ? 'animate' : ''}`}>
                    <h1 className='text-6xl/10 text-center m-10'>My Skills</h1>
                    {/* <div className='flex gap-5 justify-center items-center'>
                        <p className='text-center float-left text-2xl mt-6'>
                            Web Development

                        </p>
                        <div className='flex justify-center items-center mt-5'>
                            <Progress value={80} w={250} />
                        </div>
                    </div> */}
                    {/* <h1 className='text-3xl text-center mt-6'>Tech  I'm Familar with :</h1> */}
                    <div className=' flex mt-8 flex-wrap text-2xl gap-10 justify-center items-center'>
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