import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import './Navbar.css';
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h1 className='text-3xl font-bold'>SmileUp</h1>
            <nav ref={navRef} className='flex items-center p-4 rounded-xl m-2 cursor-pointer duration-300'>
                <a href="/#">Signup</a>
                <a href="/#">Login</a>
                <a href="/#">About</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
        </header>
    );
}

export default Navbar;