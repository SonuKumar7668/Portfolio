import React from 'react'
import SocialMedia from "../components/SocialMedia"
import Button from '../components/Button';
import { Link } from 'react-router';
function Home() {
    return ( 
        <div className='flex flex-col-reverse lg:flex-row min-h-[100vh] bg-fuchsia-500 transition-all duration-300'>
            <div className='bg-[#0A0F0D] text-white min-h-[50vh] w-100vw lg:w-[60vw] xl:h-[100vh] xl:home-box flex pt-15 md:items-center'>
                <div className='flex flex-col mx-auto px-5 lg:text-left text-center text-4xl xl:text-9xl lg:text-8xl md:text-7xl'>
                    <p className='m-0 '>WEB</p>
                    <p className='m-0'>DEVELOPER</p>
                    <p className="mt-4 text-2xl text-gray-200">Learning, building, and eager to solve real-world problems.</p>
                    <Link to="/about"><Button/></Link>
                </div>
            </div>

            <div className='bg-[#DCEDFF] lg:w-[40vw] h-fit lg:h-[100vh] flex justify-center md:items-center xl:home-box'>
                <div className=' w-[80%] md:w-[60%] h-fit xl:h-auto flex flex-col items-center mt-25'>
                    <img className=' rounded-[100%] grayscale shadow-2xl hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out' src="../profile.jpg" alt='...self'/>
                    <SocialMedia className="w-[60%]"/>
                </div>
            </div>
        </div>
     );
}

export default Home;