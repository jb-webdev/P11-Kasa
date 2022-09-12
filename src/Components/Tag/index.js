/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 * 
  compo type 
   <Tag 
      text="texte a afiicher provenant de la BDD" 
      key=" attribuer une cléf unique si besoin lors d'une boucle "
    />
 */
import React from 'react'
import './style.css'


export default function Tag(props) {
  return (
    <div className='itemTag'>
      <p className='itemTagText'>{props.text}</p>
    </div>
  )
}