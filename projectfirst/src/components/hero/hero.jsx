import React from 'react'
import './style.css'
function Hero() {
  return (
    <div id='parent__div'>
      <div className='content__section'>
      <h1>HeLLO WORDL</h1>
      <p>For 60 years, WWF has worked to help people and nature thrive.
         As the world's leading conservation organization, WWF works in nearly 100 countries.
          At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities,
         wildlife, and the places in which they live.</p>
      </div>
      <div className='dog__section'>
      <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' alt=""/>
      </div>
    </div>
  )
}

export default Hero
