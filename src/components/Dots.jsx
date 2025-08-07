import React from 'react'

function Dots() {
    const titles = ['card1','card2','card3','card4','card5']
    return (
        <>
        {
            titles.map((card,index)=>{
                <div className="card" id={card} key={index} >
                    .
                </div>
            })
        }
        </>
     );
}

export default Dots;