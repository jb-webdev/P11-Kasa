/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'

export default function Text(props) {
  var classCompo = ""
  var modelProps = props.sizeModel
  
  if(modelProps === "large"){
    classCompo = "textBodydropdown largeTextBodyDropdown"
  } else {
    classCompo = "textBodydropdown mediumTextBodyDropdown"
  }


  return (
    <>
      <p className={classCompo}>{props.description}</p>
    </>
  )
}