/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'

import Banner from '../../Components/Banner/index.js'
import DropdownContainer from './DropdownContainer/index.js'

export default function About() {
  return (
    <main id="aboutContainer">
      <Banner title="" classCompo = "imgTwo" image = "img-banner-two.png" position="center 40%"/>
      <DropdownContainer />
    </main>
  )
}