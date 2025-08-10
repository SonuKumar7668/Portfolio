import React from 'react'
import Framworks from './Framworks';
import Languages from './Languages';

function Skill() {
    return (
        <div className='bg-[#DCEDFF] dark:bg-black dark:text-white pt-15 '>
            <h1 className='text-center text-5xl font-bold text-gray-900 dark:text-gray-200 animate-fadeIn'>Skills </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-4 mb-12 ">
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