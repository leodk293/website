import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';
import menuIcon from '../../../images/menu-icon.png';
import { Link } from 'react-scroll';

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={isDark ? 'dark-nav' : ''}>
            <img src={logo} alt="" />

            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><Link to='hero'  smooth={true} duration={500} offset={0}>Home</Link></li>
                <li><Link to='program'  smooth={true} duration={500} offset={0}>Program</Link></li>
                <li><Link to='about'  smooth={true} duration={500} offset={0}>About us</Link></li>
                <li><Link to='campus'  smooth={true} duration={500} offset={0}>Campus</Link></li>
                <li><Link to='testimonials'  smooth={true} duration={500} offset={0}>Testimonials</Link></li>
                <li className='btn'><Link to='contact'  smooth={true} duration={500} offset={0}>Contact us</Link></li>
            </ul>

            <img className='menu' src={menuIcon} alt="" onClick={toggleMenu} />
        </nav>
    );
}
