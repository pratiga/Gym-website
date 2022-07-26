import React from 'react'
import "./footer.css"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import Logo from "../../assets/logo.jpg"

const footer = () => {
  return (
    <div className='Footer-container'>
    <hr />
    <div className='footer'>
    <div className='social-links'>
   <img src={instagram} alt=""/>
   <img src={linkedin} alt=""/>
   <img src={github} alt=""/>
    </div></div>
    <div className='logo-f'>
      <img src={Logo} alt="" />
    </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}

export default footer