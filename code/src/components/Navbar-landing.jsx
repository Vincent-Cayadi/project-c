import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi';
import darklighticon from './images/darklighttoggle.svg';
import lightdarkicon from './images/lightdarktoggle.svg';
import logo from './images/blackIconText.svg';
import './navbar-hover.css';

const Navbar = () => {
  const icon = document.getElementById('icon');
  if (localStorage.theme === 'dark'){
    icon.src = darklighticon;
  } else{
    icon.src = lightdarkicon;
  }
  const [showNav, setShowNav] = useState(false);
  const toggletheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = "light";
      icon.src = lightdarkicon;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = "dark";
      icon.src = darklighticon;
    }
  };
  return (
    <nav className="sticky top-0 z-20 items-center justify-between px-10 py-4 bg-opacity-0 select-none font-manrope md:flex bg-nord6">
      <div className="flex items-center justify-between">
        <Link to="/" className="pl-8">
          <img src={logo} className="w-full max-h-6" alt="blockvaultlogo" />
        </Link>
        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? 'left-0' : '-left-full') +
          ' md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-nord3 bg-opacity-90 md:w-auto w-1/3 md:text-nord3 text-nord6 md:space-y-0 space-y-5 p-2 transition-left'
        }
      >
        <li className="items-center py-4 text-center rounded-md md:p-0 sm:hover:bg-nord1 dark:text-nord6">
          <Link className="navbar-underline" exact to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="items-center py-4 text-center rounded-md md:p-0 sm:hover:bg-nord1 dark:text-nord6">
          <Link className="navbar-underline" exact to="/transactions">
            Transactions
          </Link>
        </li>
        <li>
          <img src={darklighticon} onClick={toggletheme} id="icon"/>
        </li>
        <li className="items-center px-2 py-3 font-semibold text-center duration-300 py- rounded-xl bg-nord1 text-nord6 md:hover:scale-110">
          <Link className="p-8 md:p-4" exact to="/sign-in">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// {
//   /* <div className='px-4 cursor-pointer md:hidden' onClick={handleClick}>
//                 <svg className='w-6 h-6'
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}>
//                     <path strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </div>
//             <div className="hidden pr-8 md:block">
//                 <Link className="p-4" to='/dashboard' onClick={closeMobileMenu}>Dashboard</Link>
//                 <Link className="p-4" to='/upload'>Upload</Link>
//                 <Link className="p-4" to='/transactions'>Transactions</Link>
//                 <button className="p-4 rounded-full" to='/sign-in'>{children}</button>
//             </div> */
// }

export default Navbar;
