import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {threshold: 0.5}
        );

        const sections = document.querySelectorAll('#home, #about, #contact');
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const navClasses = `
        flex justify-between items-center
        fixed top-0 left-0 right-0 z-50 p-2
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-xl' : 'bg-white'}
    `;

    const getLinkClass = (path, isMobile = false) =>
        `transition-all duration-300 ease-in-out font-medium pb-1
         hover:text-primary
         ${activeSection === path ? 'text-primary border-b-2 border-primary' : isMobile ? 'text-black' : 'text-black'}`;

    const navLinks = (
        <>
            <li>
                <a href="#home" className={getLinkClass('#home')}>
                    How It Works
                </a>
            </li>
            <li>
                <a href="#about" className={getLinkClass('#about')}>
                    Become a Partner
                </a>
            </li>
            <li>
                <a href="#contact" className={getLinkClass('#contact')}>
                    Contact
                </a>
            </li>
        </>
    );

    return (
        <nav className={navClasses}>
            <Link to="/" className="text-2xl font-bold text-black">
                LastBite<span className="text-secondary">.</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center items-center gap-8 list-none p-0 m-0">
                {navLinks}
                <li>
                    <div
                        className="bg-secondary text-white rounded-full py-2 px-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
                        <span>Download App</span>
                    </div>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 w-full bg-footerBackground/95 backdrop-blur-lg shadow-xl">
                    <ul className="flex flex-col items-center gap-6 list-none p-6 m-0">
                        {navLinks}
                        <li>
                            <div
                                className="bg-secondary text-white rounded-full py-2 px-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
                                <span>Download App</span>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
