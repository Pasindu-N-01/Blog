import React from 'react'
import './TopBar.css'
import p6 from './images/p6.jpg'


export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcons fa-brands fa-facebook"></i>
      <i className="topIcons fa-brands fa-square-whatsapp"></i>
      <i className="topIcons fa-brands fa-square-instagram"></i>
      <i className="topIcons fa-brands fa-linkedin"></i>
      
    </div>

      <div className="topCenter">
        <div className="topList">
            <li className='topListItems'>HOME</li>
            <li className='topListItems'>ABOUT & CONTACT</li>
            <li className='topListItems'>BLOG</li>
            <li className='topListItems'>LOGOUT</li>
        </div>
      </div>

      <div className="topRight">
        <img className='topImg' src={p6} alt="" />
      </div>
      

    </div>
  )
}
