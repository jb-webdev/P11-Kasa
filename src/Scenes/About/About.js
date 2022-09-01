/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import { ContainerAbout } from './About.elements.js'

import Banner from '../../Components/Banner/Banner.js'
import DropdownContainer from './DropdownContainer/DropdownContainer.js'

export default function About(props) {
  return (
    <ContainerAbout>
        <Banner textBanner = {props.text} page={props.page}/>
        <DropdownContainer data={props.data}/>
    </ContainerAbout>
  )
}