import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    const ref = useRef(null);
    const handleButtonClick = () => {
        setmenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (menuOpen && ref.current && !ref.current.contains(e.target)) {
                setmenuOpen(false);
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [menuOpen]);
    return (
        <header>
            <nav className="container d-flex align-items-center">
                <ul className="navbarLinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
                <p className="sidebarIcon">
                    <a href="https://www.linkedin.com/in/bilgekaganece/">Bilge Kağan Ece</a>
                </p>
                <button onClick={handleButtonClick} className="sidebarIcon">
                    <FiMenu />
                </button>
                {menuOpen && (
                    <div ref={ref} className="sidebar">
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ fontWeight: '600' }}>Bilge Kağan Ece</span>
                            <button
                                style={{
                                    border: 'none',
                                    backgroundColor: 'white',
                                    padding: '.3rem',
                                    fontWeight: '600'
                                }}
                                onClick={handleButtonClick}
                            >
                                <span style={{ fontSize: '2rem' }}>X</span>
                            </button>{' '}
                        </div>
                        <ul>
                            <li onClick={handleButtonClick}>
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={handleButtonClick}>
                                <Link to="/about">About</Link>
                            </li>
                            <li onClick={handleButtonClick}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li onClick={handleButtonClick}>
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li onClick={handleButtonClick}>
                                <BsFillTelephoneFill />
                                <a href="tel:+905076613945"> +905076613945</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};
export default Header;
