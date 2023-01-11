import React from 'react'
import "./SideBar.css"
import p5 from "../Images/p5.jpg"

import Highlighter from "react-highlight-words";

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sideBarItems'>
            <span class="sideBarTitles">ABOUT ME</span>
            <img className='sidebarImg' src={p5} alt="" />
            <div className="aboutPara">
            <Highlighter className='para'
                highlightClassName="YourHighlightClass"
                searchWords={["Pasindu", "Nishshanka", "21" , "SLIIT" , "Information Technology"]}
                autoEscape={true}
                textToHighlight="I'm Pasindu Nishshanka and 22 years old. Live in Nittambuwa.
                Currently, my higher education is through a degree in Information Technology (ICT) from SLIIT..   
                I have experience in two years university projects and my own projects.I mostly use and learn node js react js and java languages.
                I have the ability to accept the responsibility and fulfill the responsibility to the letter.
                Focused on my future and career and love to advance with technology."/>
            </div>
                 
        </div>

        <div className="sideBarItems">
            <span class="sideBarTitles"> CATEGORIES </span>
            <ul className='sideBarLists'>
                <li className="sideBarListsItems">Life</li>
                <li className="sideBarListsItems">Music</li>
                <li className="sideBarListsItems">Style</li>
                <li className="sideBarListsItems">Sport</li>
                <li className="sideBarListsItems">Tech</li>
            </ul>
        </div>

        <div className="sideBarItems">
            <span class="sideBarTitles"> FOLLOW ME </span>
        </div>

        <div className="sideBarSocial">
            <i className="sideIcons fa-brands fa-facebook"></i>
            <i className="sideIcons fa-brands fa-square-whatsapp"></i>
            <i className="sideIcons fa-brands fa-square-instagram"></i>
            <i className="sideIcons fa-brands fa-linkedin"></i>
        </div>
      
    </div>
  )
}
