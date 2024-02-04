import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) { // Adjust this value based on when you want the animation to start
      setIsVisible(true);
    } 
    else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`container ${isVisible ? 'animate-fade-right animate-duration-[2000ms] animate-ease-out' : " "} `}>

    <div className={`container w-fit mt-1 ${isVisible ? 'slide-in' : ''}`}>
      <div className='h-[20vh] flex justify-center max-md:mt-12 items-center max-md:text-4xl md:text-6xl'>
        <h1>PROJECTS</h1>
      </div>
      <div className='w-fit flex items-center justify-start max-md:justify-center'>
        <div className="md:flex">
          <img src="Blog-App.jpeg" className="max-md:w-[100vh] rounded-lg p-2 object-cover h-2/3 w-2/5 ..." />
          <div className='flex-col ml-8'>
            <h1 className="max-md:text-3xl mt-3 md:text-4xl max-md:text-center">Blog App</h1>
            <p className="max-md:text-xl mt-3 md:text-xl">An Blog Website where user can perform CRUD operations on blogs and can also comment on them.JWT,bcrypt,express-session are used for authentication and authorization.
              Backend is made using Express.js and frontend is made using React.js and for data storage MongoDB is used.</p>
            <div className="mt-4">
              <Link to='https://github.com/Yashh56/Blog-App'>
                <Button gap={2}>Source Code <i className="devicon-github-original colored"></i></Button>
              </Link>
            </div>
            <div className="mt-4 gap-2">
              <i className="devicon-react-original colored"></i>
              <i className="devicon-tailwindcss-plain colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-express-original colored"></i>
              <i className="devicon-mongodb-plain colored"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 w-fit flex items-center justify-start max-md:justify-center'>
        <div className="md:flex">
          <img src="Fun-Fact.jpeg" className="max-md:w-[100vh] rounded-lg p-2 object-cover h-2/3 w-2/5 ..." />
          <div className='flex-col ml-8'>
            <h1 className="max-md:text-3xl mt-3 md:text-4xl max-md:text-center">Fun Fact Generator</h1>
            <p className="max-md:text-xl mt-3 md:text-xl">A website where you can get random facts about different topics. Fun Fact Generator Web App in Python using the PyWebio module. Essentially, it will create interesting facts at random and display them on the web interface.
            </p>
            <div className="mt-4">
              <Link to='https://github.com/Yashh56/Fun-Fact-Generator'>
                <Button gap={2}>Source Code <i className="devicon-github-original colored"></i></Button>
              </Link>
            </div>
            <div className="mt-4 gap-2">
              <i className="devicon-python-plain colored"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 w-fit flex items-center justify-start max-md:justify-center'>
        <div className="md:flex">
          <img src="CryptoVerse.jpeg" className="max-md:w-[100vh] p-2 object-cover rounded-lg h-2/3 w-2/5 ..." />
          <div className='flex-col ml-8'>
            <h1 className="max-md:text-3xl mt-3 md:text-4xl max-md:text-center">CryptoVerse</h1>
            <p className="max-md:text-xl mt-3 md:text-xl">A website where you can get information about different cryptocurrencies. React.js is used for frontend and Chart js is used for displaying the data in graphical form and axios is used for fetching data from API Context API is used for state management.</p>
            <div className="mt-4 flex gap-4">
              <Link to='https://github.com/Yashh56/CryptoVerse'>
                <Button gap={2}>Source Code <i className="devicon-github-original colored"></i></Button>
              </Link>
              <Link to='https://crypto-verse-wine.vercel.app/'>
                <Button gap={2}>Demo</Button>
              </Link>
            </div>
            <div className="mt-4 gap-2">
              <i className="devicon-react-original colored"></i>
              <i className="devicon-sass-original colored"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Projects