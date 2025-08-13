import React from 'react'
import Framworks from './Framworks';
import Languages from './Languages';

function Skill() {
    return (
        <div className='bg-[#DCEDFF] pt-30 '>
            <h1 className='text-center text-5xl font-bold text-gray-900 animate-fadeIn'>Skills </h1>
            <p className="text-center text-gray-600 max-w-xl mx-auto mt-4 mb-12 ">
                A blend of tools, languages, and frameworks I use to craft scalable and engaging applications.
            </p>
            <hr className="my-8 border-gray-300"/>
            <div className='divide-y divide-gray-300'>
            <Framworks />
            <Languages />
            </div>
        </div>
    );
}

export default Skill;