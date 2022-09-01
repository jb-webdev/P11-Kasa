import React, { useState } from 'react'
import {ContainerButton, ContainerSlider, ImageContainer, SliderButton, NavButton, CountImage} from './Slider.elements.js'
import { MdOutlineKeyboardArrowLeft,  MdOutlineKeyboardArrowRight} from 'react-icons/md';

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
    <ContainerSlider>
      <ContainerButton>
        <SliderButton>
          <NavButton left onClick={prev}>
            <MdOutlineKeyboardArrowLeft />
          </NavButton>
          <NavButton right onClick={next}>
            <MdOutlineKeyboardArrowRight />
          </NavButton>
        </SliderButton>
      <CountImage>{imageIndex +1}/{config.length}</CountImage>
      </ContainerButton>
      
      <ImageContainer src={config[imageIndex]}/>

    </ContainerSlider>
  )
}
