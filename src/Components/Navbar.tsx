import { useState } from "react";
import { GoSun } from "react-icons/go";

import { FaMoon } from "react-icons/fa";

const Navbar = () => {

  const [dark,setDark] = useState(true);

  const toggleTheme = () => {
    const html = document.querySelector('html')
    html?.classList.toggle('dark')
    setDark(!dark)

  }
  return (
    <div className='flex justify-end P-2'>
      {dark ? <p className=" cursor-pointer fixed"><FaMoon onClick={toggleTheme}/></p> : <p className=" cursor-pointer fixed"><GoSun onClick={toggleTheme}/></p>}
    </div>
  )
}

export default Navbar