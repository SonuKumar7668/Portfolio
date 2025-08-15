import React from 'react'
import ProjectCard from './ProjectCard';
import { ProjectInfo } from '../Data/ProjectData';

function ProjectPage() {

    return ( 
        <div className='bg-[#DCEDFF] py-30 '>
        <h1 className='page-heading mb-10'>Projects</h1>
        <p className='text-center text-gray-600 max-w-xl mx-auto  mb-12'>Selected projects demonstrating my expertise in front-end and back-end development, built using modern technologies and best practices.</p>
        {ProjectInfo.map((project,index)=>{
            return(<ProjectCard title={project.title} desc={project.description} skills={project.skills} link={project.link} github={project.github} key={index}/>)
        })}
        </div>
     );
}

export default ProjectPage;