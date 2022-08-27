/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import { ContainerAbout } from './About.elements.js'
import BannerCompo from '../../Components/BannerCompo/BannerCompo.js'
import datasGlobal from '../../services/data/datasGlobal.json'

export default function About() {
  return (
    <ContainerAbout>
        <BannerCompo textBanner = {datasGlobal.Banner[1].text} page="about"/>
    </ContainerAbout>
  )
}


