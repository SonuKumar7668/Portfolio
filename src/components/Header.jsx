import React from 'react'
import { Link } from 'react-router';
function Header() {
    
    return ( 
        <header className='flex fixed justify-between w-[100%]  py-5'>
            <div className='text-white'>
                <h1 className='title text-2xl mx-5 font-'>SONU KUMAR</h1>
            </div>
            <div className=' mx-5 right-0'>
                <Link className="linkStyle" to="/" > HOME </Link>
                <Link className="linkStyle" to="/skills" > SKILLS </Link>
                <Link className="linkStyle" to="/about" > ABOUT </Link>
            </div>
        </header>
     );
}

export default Header;