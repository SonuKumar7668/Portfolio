import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerIcon from './BurgerIcon';

function Header() {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const activeLink = "active-link";
    const headerStyle = "flex fixed py-5 z-10 w-full justify-between lg:bg-transparent";

    const handleClick = () => {
        console.log("clicked at", Date.now());
        setIsClicked(prev => !prev);
    };

    return (
        <header className={`${headerStyle} ${isHomePage ? 'bg-[#DCEDFF] md:bg-transparent' : 'bg-[#DCEDFF] shadow-md'}`}>
            <div className={isHomePage ? `lg:text-white` : `text-black`}>
                <Link to="/">
                    <h1 className="title text-2xl mx-5">SONU KUMAR</h1>
                </Link>
            </div>
            <div className="flex flex-col items-end">
                <div className="mr-2.5 block lg:hidden cursor-pointer w-fit right-0.5 ">
                    <BurgerIcon click={handleClick} isOpen={isClicked} />
                </div>
                <div
                    className={`mx-5 right-0 transition-all duration-300 
                    ${isClicked ? 'flex flex-col text-2xl' : 'hidden'} 
                    lg:block`}
                    onClick={handleClick}
                >
                    <Link className={`linkStyle ${location.pathname === "/" ? activeLink : ""}`} to="/">HOME</Link>
                    <Link className={`linkStyle ${location.pathname === "/skills" ? activeLink : ""}`} to="/skills">SKILLS</Link>
                    <Link className={`linkStyle ${location.pathname === "/about" ? activeLink : ""}`} to="/about">ABOUT</Link>
                    <Link className={`linkStyle ${location.pathname === "/projects" ? activeLink : ""}`} to="/projects">PROJECTS</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
