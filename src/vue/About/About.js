/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import { ContainerAbout } from './About.elements.js'
import BannerCompo from '../../Components/BannerCompo/BannerCompo.js'

export default function About(props) {
  return (
    <ContainerAbout>
        <BannerCompo textBanner = {props.text} page={props.page}/>
    </ContainerAbout>
  )
}

