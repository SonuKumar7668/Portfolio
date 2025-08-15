import React from 'react'
import Card from './Card';
function SkillsCard({data,title,desc}) {
    return ( 
        <div className='mt-10'>
        <h2 className='text-4xl font-bold text-gray-900 text-center'>{title}</h2>
        <p className="text-center text-gray-700 mb-12">{desc}</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center md:mx-[15vw]'>
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