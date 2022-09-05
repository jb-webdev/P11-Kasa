/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
 import React, { useState } from 'react'
import './style.css'

export default function Slider(props) {

  const config = props.config

  const [imageIndex, setImageIndex] = useState(0) 

  const next = () => {
    setImageIndex(state => state += 1);
    if(imageIndex === config.length -1) setImageIndex(0)
  }
  const prev = () => {
    setImageIndex(state => state -= 1);
    if(imageIndex === 0) setImageIndex(config.length -1)
  }

  return (
    <div className="sliderSection">
      <div className='wrapperButton'>
        <div className='btnSlider' onClick={prev}>
          <span><i className="fa-sharp fa-solid fa-angle-left"></i></span>
        </div>
        <div className='countSlider'>
          <p className='paraphCountSlider'>{imageIndex +1}/{config.length}</p>
        </div>
        <div className='btnSlider' onClick={next}>
          <span><i className="fa-sharp fa-solid fa-angle-right"></i></span>
        </div>
      </div>
      <picture className='wrapperImage'>
        <img src={config[imageIndex]} alt='essai'/>
      </picture>
      
    </div>
  )
}