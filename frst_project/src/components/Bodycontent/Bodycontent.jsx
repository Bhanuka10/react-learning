import React from 'react'
import './Bodycontent.css'
import reactlogo from "../../assets/react.svg"

function Bodycontent() {
  return (
    <div id="middle">
        <p>Middle content</p>
        <div>
          <img src="vite.svg" alt="vite" />
          <img src={reactlogo} alt="react" />
          
        </div>
      </div>
  )
}

export default Bodycontent