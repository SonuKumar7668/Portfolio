import React from 'react'
import Card from './Card';
function SkillsCard({data,title,desc}) {
    return ( 
        <div className='mt-10'>
        <h2 className='Skills-heading'>{title}</h2>
        <p className="text-center text-gray-700 mb-12">
                {desc}
            </p>
        <div className='skills-div'>
            {data.map((d,index)=>{
                return (
                    <Card title={d.title} desc={d.desc} img={d.image} key={index} />
                )
            })}
            
        </div>
    </div>
     );
}

export default SkillsCard;