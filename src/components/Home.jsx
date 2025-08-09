import React from 'react'
import SocialMedia from "./SocialMedia"
import Button from './Button';
function Home() {
    return ( 
        <div className='flex justify-between'>
            <div className='bg-[#0A0F0D] text-white w-[60vw] home-box flex items-center'>
                <div className='flex flex-col pl-5 text-9xl'>
                    <p className='m-0 '>WEB</p>
                    <p className='m-0'>DEVELOPER</p>
                    <p className="mt-4 text-2xl text-gray-200">Learning, building, and eager to solve real-world problems.</p>
                    <Button/>
                </div>
                
            </div>
            <div className='bg-[#DCEDFF] w-[40vw] flex justify-center home-box'>
                <div className=' w-[60vh] h-auto flex flex-col items-center  mt-10'>
                    <img className=' rounded-[100%] grayscale shadow-2xl hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out' src="../public/profile.jpg" alt='...self'/>
                    <SocialMedia/>
                </div>
            </div>
        </div>
     );
}

export default Home;