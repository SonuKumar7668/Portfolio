import React from 'react'
import { frameworks, languages, databases } from "../Data/skillData"
import SkillsCard from './skillsCard';

function Skill() {
    return (
        <div className='bg-[#DCEDFF] py-30 w-[100vw] transition-all duration-300 px-2'>
            <h1 className='page-heading'>Skills </h1>
            <p className="text-center text-gray-600 mx-auto mt-4 mb-12 ">
                A blend of tools, languages, and frameworks I use to craft scalable and engaging applications.
            </p>
            <hr className="my-8 border-gray-300"/>
            <div className='divide-y divide-gray-300'>
            <SkillsCard data={frameworks} title="Frameworks & Libraries" desc="The tools and technologies I rely on to create impactful applications" />
            <SkillsCard data={languages} title="Programming Languages" desc="The languages i'm most familier with." />
            <SkillsCard data={databases} title="Databases" desc="The Databases i use to store data of my applications." />
            </div>
        </div>
    );
}

export default Skill;