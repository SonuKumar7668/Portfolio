import React from 'react'
import Card from './Card';

function Framworks() {
    return (
        <div className='mt-[30px]'>
            <h2 className='Skills-heading'>Frameworks & Libraries</h2>
            <p className="skills-desc">
                The tools and technologies I rely on to create impactful applications
            </p>
            <div className='skills-div'>
                <Card title="React" desc="Library I use for frontend development" img="./Icons/react.png" />
                <Card title="Node.js" desc="Runtime I use for building scalable backend services" img="./Icons/nodejs.png" />
                <Card title="Express.js" desc="Framework I use for creating REST APIs" img="./Icons/Express.png" />
                <Card title="Tailwind CSS" desc="Utility-first CSS framework I use for fast UI styling" img="./Icons/Tailwind CSS.png" />
            </div>
        </div>
    );
}

export default Framworks;