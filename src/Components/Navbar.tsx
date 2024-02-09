import { useState, useEffect } from "react";
import { GoSun } from "react-icons/go";

import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the dark mode value from local storage or default to false
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    return isDarkMode;
  });

  useEffect(() => {
    // Apply the dark mode class to the body tag
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the dark mode preference in local storage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='flex justify-end P-2'>
      {darkMode ? <p className=" cursor-pointer "><FaMoon onClick={toggleDarkMode} /></p> : <p className=" cursor-pointer "><GoSun onClick={toggleDarkMode} /></p>}
    </div>
  )
}

export default Navbar