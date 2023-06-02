import { useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <header className="navBar">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>JOB</strong>Search
        </h1>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <AiOutlineMenu size={30} />
      </button>

      <nav className="menu flex gap-8" ref={navRef}>
        <button className='nav-btn nav-close-btn'>
          <AiOutlineClose size={30} className='text-center md:hidden' onClick={showNavbar} />
        </button>
        <li className="menuList">Jobs</li>
        <li className="menuList">Companies</li>
        <li className="menuList">About</li>
        <li className="menuList">Contact</li>
        <li className="menuList">Blog</li>
        <li className="menuList">Login</li>
        <li className="menuList">Register</li>
      </nav>
    </header>

  );
};

export default NavBar;


// https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js:242-1892