import React from 'react'
import './MenuLink.css'
function MenuLink(props) {
  return (
    <div className='nav'><a href={props.Url} className='Link'>{props.linkname}</a></div>
  )
}

export default MenuLink