/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'

export default function ProfileImage(props) {
  return (
    <>
    <img className='profileImage' src={props.src} alt={props.alt}/> 
    </>
  )
}