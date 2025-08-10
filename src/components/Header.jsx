import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router';
function Header() {
    let [handleClick,setHandleClick]=useState(0);

    const handleClicks=(el)=>{
        setHandleClick(el);
    }
    let activeLink = "active-link";
    
    return ( 
        <header className='flex fixed justify-between w-[100%]  py-5'>
            <div className={handleClick !== 0 ? `text-black`: `text-white`}>
                <h1 className='title text-2xl mx-5 font-'>SONU KUMAR</h1>
            </div>
            <div className=' mx-5 right-0'>
                <Link className={`linkStyle ${handleClick === 0 ? activeLink : ``}`} onClick={(()=>handleClicks(0))} to="/" > HOME </Link>
                <Link className={`linkStyle ${handleClick === 1 ? activeLink : ``}`} to="/skills" onClick={(()=>handleClicks(1))} > SKILLS </Link>
                <Link className={`linkStyle ${handleClick === 2 ? activeLink : ``}`} to="/about" onClick={(()=>handleClicks(2))} > ABOUT </Link>
            </div>
        </header>
     );
}

export default Header;