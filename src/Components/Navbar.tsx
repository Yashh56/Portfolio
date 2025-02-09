import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-white/5 text-white'
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-[#030014]/50 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            Ys.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-[#030014]/80 backdrop-blur-md transition-all duration-300 ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;