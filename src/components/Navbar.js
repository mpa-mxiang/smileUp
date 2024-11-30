import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <header>
      <h1>SmileUp</h1>
      <nav ref={navRef}>
        <a href="/#">About</a>
        <a href="/#">Resource</a>
        <a href="/#">Signup</a>
        <a href="/#">Login</a>
        <button className="nav-btn nav-close-btn" type="button" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" type="button" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
