import React from 'react';
import './Bodycontent.css';
import reactlogo from '../../assets/react.svg'; // Correct import

function Bodycontent() {
  return (
    <div id="middle">
      <p>Middle content</p>
      <div>
        {/* Correct image paths */}
        <img src="/vite.svg" alt="vite" /> {/* Assuming vite.svg is in the public folder */}
        <img src={reactlogo} alt="react" /> {/* Correct way to use imported image */}
      </div>
    </div>
  );
}

export default Bodycontent;
