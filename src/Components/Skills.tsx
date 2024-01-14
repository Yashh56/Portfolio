import { useEffect, useState } from 'react';
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
        <div>
            <div className='mt-8 bg-transparent'>
                <div id="animatedSection1" className={`section ${isVisible ? 'animate' : ''}`}>
                    <h1 className='text-4xl text-center  text-white max-md:text-2xl '>SKILLS</h1>
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
            </div>
        </div>
    )
}

export default Skills