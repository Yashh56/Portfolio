import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#171717] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Ys.</Link>
        <div className="hidden md:flex">
          <Button colorScheme="white" variant="link" className="mt-2">
            <Link to="/projects" className="ml-4 hover:text-gray-300">Projects</Link>
          </Button>
          <Button colorScheme="white" variant="link" className="mt-2">
            <Link to="/aboutme" className="ml-4 hover:text-gray-300">About Me</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Button colorScheme="white" variant="link" className="mt-2">
          <Link to="/projects" className="block hover:text-gray-300 p-2">Projects</Link>
        </Button>
        <Button colorScheme="white" variant="link" className="mt-2">
          <Link to="/aboutme" className="block hover:text-gray-300 p-2">About Me</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
