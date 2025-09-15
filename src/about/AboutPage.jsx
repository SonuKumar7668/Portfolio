import React from 'react'
import { Link } from 'react-router';

function AboutPage() {
  return (
    <div className='bg-day py-30 px-5 lg:px-[10vw] min-h-[100vh]'>
      <h1 className='page-heading'>About me!</h1>
      <p className='text-gray-800 px-5 lg:px-15 my-5 shadow-md hover:shadow-xl transition-all duration-300 p-3.5 rounded-2xl'>
        Hi, I'm Sonu Kumar — a Computer Science student passionate about building efficient, user-friendly web applications. I enjoy working with the MERN stack, exploring AI integrations, and solving real-world problems through code. My projects range from small tools to full-scale platforms, and I'm always looking for ways to improve my skills and take on new challenges.
      </p>
      <div className='text-center mt-20 shadow-md hover:shadow-xl transition-all duration-300 p-3.5 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-gray-800 ">
          My Technical Toolkit
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          I have experience with a variety of modern technologies for web development, from the frontend to the backend.
        </p>
        <Link
          to="/skills"
          className="inline-flex items-center justify-center bg-night text-white font-bold text-lg px-8 py-3 rounded-lg transition-transform duration-300 hover:bg-night hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
        >
          See My Skills

        </Link>
      </div>
      <div className='text-center mt-20 shadow-md hover:shadow-xl transition-all duration-300 p-3.5 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-gray-800 ">
          My Projects
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          I've worked on a range of projects that showcase my skills in web development, problem-solving, and creativity.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center justify-center bg-night text-white font-bold text-lg px-8 py-3 rounded-lg transition-transform duration-300 hover:bg-night hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
        >
          See My Projects

        </Link>
      </div>
    </div>
  );
}

export default AboutPage;