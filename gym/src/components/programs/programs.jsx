import React from 'react'
import './program.css'
import { programsData } from '../../Data/programsdata'
import RightArrow from '../../assets/rightArrow.png'

const programs = () => {
  return (
    <div className='Programs' id="programs">
    <div className='programs-header'>
        <span className='stroke-text'>Explore out</span>
        <span className='stroke-text'>Program</span>
        <span>to shape your</span>
    </div>
    <div className='program-categories'>
    { 
      programsData.map((program) => (
        <div className='category'>
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className='join-now'>
          <span><img src={ RightArrow } alt=""/></span>
          </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default programs