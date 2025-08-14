import React from 'react';
import { Link, useLocation } from 'react-router';
function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    //const headerStyle = {isHomePage ? "flex fixed justify-between w-[100%]  py-5" : 'flex fixed justify-between w-[100%]  py-5'}
    let activeLink = "active-link";
    
    return ( 
        <header className={isHomePage ? "flex fixed justify-between w-[100%]  py-5" : 'flex bg-[#DCEDFF] z-10 fixed shadow-md justify-between w-[100%]  py-5'}>
            <div className={isHomePage ? `text-white`: `text-black`}>
                <Link to="/" >
                <h1 className='title text-2xl mx-5 font-'>SONU KUMAR</h1>   
                </Link>
            </div>
            <div className=' mx-5 right-0 transition-all duration-300'>
                <Link className={`linkStyle ${isHomePage ? activeLink : ``}`} to="/" > HOME </Link>
                <Link className={`linkStyle ${location.pathname === "/skills" ? activeLink : ``}`} to="/skills"  > SKILLS </Link>
                <Link className={`linkStyle ${location.pathname === "/about" ? activeLink : ``}`} to="/about"  > ABOUT </Link>
                <Link className={`linkStyle ${location.pathname === "/projects" ? activeLink : ``}`} to="/projects" > PROJECTS </Link>
            </div>
        </header>
     );
}

export default Header;