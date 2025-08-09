import React, { useEffect, useState } from 'react';

function Dots() {
  const boxSize = 60; // 60px box
  const [boxCount, setBoxCount] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateBoxCount = () => {
      const cols = Math.floor(window.innerWidth / boxSize);
      const rows = Math.floor(window.innerHeight / boxSize);
      setBoxCount({ rows, cols });
    };

    updateBoxCount(); // Initial calculation
    window.addEventListener('resize', updateBoxCount); // Update on resize

    return () => window.removeEventListener('resize', updateBoxCount);
  }, []);

  const totalBoxes = boxCount.rows * boxCount.cols;
  const boxes = Array.from({ length: totalBoxes });

  return (
    <div
      className="w-screen h-screen grid"
      style={{
        gridTemplateColumns: `repeat(${boxCount.cols}, ${boxSize}px)`,
        gridTemplateRows: `repeat(${boxCount.rows}, ${boxSize}px)`,
        gap: '1px',
        marginLeft: '1px'
      }}
    >
      {boxes.map((_, index) => (
        <div
          key={index}
          className="border-1 hover:border-0 border-amber-200 transition-all duration-75 flex items-center justify-center"
          style={{
            width: `${boxSize}px`,
            height: `${boxSize}px`,
          }}
        >
          
        </div>
      ))}
    </div>
  );
}

export default Dots;
