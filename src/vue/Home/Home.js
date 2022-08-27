/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import ContainerHome from './Home.elements.js'
import BannerCompo from '../../Components/BannerCompo/BannerCompo.js'

export default function Home() {
  return (
    <ContainerHome>
      <BannerCompo textBanner = 'Chez vous, partout et ailleurs'/>
    </ContainerHome>
  )
}
