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
            <h1>Logo</h1>
            <nav ref={navRef}>
                <a href="/#">About</a>
                <a href="/#">Features</a>
                <a href="/#">FAQs</a>
                <a href="/#">Testimonials</a>
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