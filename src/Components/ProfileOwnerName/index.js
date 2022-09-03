/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'


export default function ProfileOwnerName(props) {
  return (
    <div className='profileOwnerNameWrapper'>
      <p className='profileFirstName'>{props.firstname}</p>
      <p className='profileName'>{props.name}</p>
    </div>
  )
}