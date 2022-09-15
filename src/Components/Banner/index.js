/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 * 
 * 
 compo type : 
   <Banner 
        title=" Titre du composant "
        classCompo = "imgOne" or  "imgTwo"
        image = "../../services/img/img-banner-one.png" 
        position="center 45%"
   />
 
   */
  import React from 'react'
  import './style.css'
  
  export default function Banner(props) {
    var imGBanner = require('../../services/img/'+ props.image)
    
    const bannerStyle = {
        backgroundImage:`url(${imGBanner})`,
        backgroundPosition: `${props.position}`,
    }
   
  return (
      <section
        className={`bannerContainer ` + props.classCompo} style={bannerStyle}
      >
        <p className="bannerTitle">{props.title}</p>
      </section>
    
  )
}