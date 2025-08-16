import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectPreview from './ProjectPreview';
import StyledButton from "../components/StyledButton"
function ProjectCard({ title, desc, skills, link, github }) {
    return (
        <div className='flex lg:flex-row md:mx-5 flex-col lg:mx-[10vw] bg-second lg:p-5 rounded-xl my-5 shadow-2xl' >
            <div className='lg:w-[50%]  m-1.5'>
                <ProjectPreview url={link} />
            </div>

            <div className='flex flex-col  lg:w-[50%] ml-1.5 pl-3.5 pt-10'>
                <h1 className='text-2xl'>{title}</h1>
                <div className='flex my-10 flex-wrap'>
                    <span className='font-bold'>Skills: </span>
                    {skills.map((skill,index) => {
                        return (
                            <span className='bg-mood py-0.5 px-2 rounded-xl mx-1 ' key={index}>{skill}</span>
                        );
                    })}
                </div>
                <p className='mb-10'>{desc} </p>
                <div className='grid grid-cols-2 pb-10 lg:w-[40%]'>
                    <a href={link} target='blank'>
                        <StyledButton variant="outlined" startIcon={<OpenInNewIcon />}>
                            Visit
                        </StyledButton>
                    </a>
                    <a href={github} target='blank'>
                        <StyledButton variant="contained" startIcon={<GitHubIcon />}>
                            GitHub
                        </StyledButton>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;