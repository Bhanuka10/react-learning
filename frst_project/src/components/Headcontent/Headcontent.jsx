import React from 'react'
import './Headcontent.css'
import MenuLink from '../MenuLink/MenuLink'

function Headcontent() {
  return (
    <div id="head">
      <img src="https://static.wixstatic.com/media/6cb056_8605763b03dd4bff93e07426e27078a7~mv2.png/v1/fit/w_448,h_252,lg_1,q_85,usm_0.66_1.00_0.01,enc_auto/6cb056_8605763b03dd4bff93e07426e27078a7~mv2.png" alt="" />
        <h3>Header content</h3>
        <div className='navi'>
        <MenuLink linkname="Home" Url="#Home"/>
        <MenuLink linkname="About" Url="#About"/>
        <MenuLink linkname="Contact" Url="#Contact"/>
        
        
        </div>
      </div>
      
  )
}

export default Headcontent