import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"


const Hero = () => {
  const transition = {type:'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
    <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header/>
            {/* the best ad  */}
            <div className='the-best-ad'>
            <motion.div
             initial={{left:mobile?"178px":'238px'}}
             whileInView={{left: '8px'}}
             transition={{...transition, type: 'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
            </div>
            {/* Hero Heading */}
            <div className='hero-text'>
                <div>
                <span className='stroke'>Shape</span>
                <span>Your</span>
                </div>
                <div><span>
                Ideal body</span>
                </div>
                <div><span>
                In here we will help you to shape and build 
                your live up your life to fullest.
                </span></div>
            </div>
            
            {/* figures */}
        <div className='figures'>
        <div>
          <span>+140</span>
          <span>expert coachs</span>
        </div>
        <div>
          <span>+978</span>
          <span>members joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>fitness programs</span>
        </div>
        </div>
        
        {/* hero button */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>

        </div>
        <div className='right-h'>
        <button className='btn'> join Now</button>
        <motion.div
        initial={{right: "-lrem"}}
        whileInView={{ right: "4rem"}}
        transition={transition}
        className="heart-rate">
        <img src= {Heart} alt=""/>
        <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        
        {/* hero images  */}
        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right: '25rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero_image_back"/>
        <motion.div
        initial={{right:"47rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
         className='calories'>
          <img src={Calories} alt="" />
          <span>Calories Burned </span>
          <span>220 kcal</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero