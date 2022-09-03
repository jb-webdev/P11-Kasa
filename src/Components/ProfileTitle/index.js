/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
// <ProfileTitle title='TITLE' location='LOCATION' />
export default function ProfileTitle(props) {
  return (
    <>
      <h2 className='titleProfileTitle'>{props.title}</h2>
      <p className='locationProfileTitle'>{props.location}</p>
    </>
  )
}