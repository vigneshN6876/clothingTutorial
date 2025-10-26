import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-left' >
            <h2>New Arrivals Only</h2>
            <div>
                 <div className="hero-hand-icon">
                    <p>new</p>
                    <img src= {hand_icon} alt="" srcset="" />
                </div>
                <p>Collections</p>
                <p>for eveyone</p>
                <div className="hero-latest-btn">
                    <div>Lastest Collections</div>
                    <img src= {arrow_icon} alt="" srcset="" />
                </div>
            </div>
        </div>
       
         <div className='hero-right' >
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero