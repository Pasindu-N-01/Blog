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
            <li className='topListItems'>Home</li>
            <li className='topListItems'>About & Contact</li>
            <li className='topListItems'>Blog</li>
            <li className='topListItems'>LogOut</li>
        </div>
      </div>

      <div className="topRight">
        <img className='topImg' src={p6} alt="" />
        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
      

    </div>
  )
}
