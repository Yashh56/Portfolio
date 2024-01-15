import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
import { Avatar } from '@chakra-ui/react';
const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set isVisible to true if the section is in the viewport
            setIsVisible(isElementInViewport());
        };

        const isElementInViewport = () => {
            const element = document.getElementById('animatedSection');
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
        <div id="animatedSection" className="h-[80vh]  max-md:ml-0 max-md:min-w-fit sm:min-w-fit justify-center items-center">
            <div id="animatedSection" className={`section ${isVisible ? 'animate' : ''}`}>
                {/* <div> */}
                <div className="flex justify-center items-center">
                    <h1 className='text-4xl text-center  text-white'>ABOUT ME</h1>
                </div>
                <div className="max-md:flex-row flex-row max-md:min-w-fit sm:min-w-fit  md:flex justify-center items-center">
                    <Avatar className='ml-24 items-center justify-center ' size='2xl' name='Segun Adebayo' src='12.jpg' />{' '}

                    <div className=" max-md:flex-row ml-2 md:w-[90vh] max-md:min-w-min sm:w-full text-center mt-6">
                        {/* <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div> */}
                        {/* <p className='animate-fade-right max-md:min-w-fit sm:min-w-fit animate-once text-white text-center mt-2 text-1xl'>an 18-year old who is interested in Web Development</p> */}
                        <p className='animate-fade-right max-md:min-w-fit sm:min-w-fit animate-once text-white text-center mt-2 text-1xl'>Hello, I'm Yash, a first-year undergraduate student pursuing a Bachelor's in Computer Science. I'm passionate about exploring various facets of the field, including web development, competitive programming, and other related areas.</p>
                        <p className='animate-fade-right max-md:min-w-fit sm:min-w-fit animate-once text-white text-center mt-2 text-1xl'> Currently I am learning different DSA Concepts and working on projects related to MERN Stack.</p>
                        <p className='animate-fade-right max-md:min-w-fit sm:min-w-fit animate-once text-white text-center mt-2 text-1xl'> I also Contributed in Hacktoberfest 2023 </p>
                        <p className='animate-fade-right animate-once max-md:min-w-fit sm:min-w-fit text-white text-center mt-2 text-1xl'> My Hobbies are Watching Anime and reading Books</p>
                        <p className='animate-fade-right animate-once max-md:min-w-fit sm:min-w-fit text-white text-center mt-2 text-1xl'>I am actively searching for a full-time position or internship that aligns with my skills and career goals, where I can contribute effectively and continue to develop my expertise. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About