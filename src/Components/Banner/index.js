/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import image from '../../services/img/img-banner-one.png'
import imageTwo from '../../services/img/img-banner-two.png'

export default function Banner(props) {
  const title = props.title
  var styleImage
  var classCompo = ""
  
  
  switch (props.page) {
    case "home":
      styleImage = {
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center 45%",
      }
      classCompo = "bannerContainer imgOne"
      
      break
    case "about":
      styleImage = {
        backgroundImage:`url(${imageTwo})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center 40%",
      }
      classCompo = "bannerContainer imgTwo"
      break
    default:
      styleImage = {
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center 45%",
      }
      classCompo = "bannerContainer imgOne"
      break
  }
  

  return (
      <section 
      className={classCompo} style={styleImage}>
        <p className="bannerTitle">{title}</p>
      </section>
    
  )
}