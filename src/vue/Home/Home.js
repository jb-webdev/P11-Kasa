/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import ContainerHome from './Home.elements.js'
import BannerCompo from '../../Components/BannerCompo/BannerCompo.js'
import datasGlobal from '../../services/data/datasGlobal.json'

export default function Home() {
  return (
    <ContainerHome >
      <BannerCompo textBanner = {datasGlobal.Banner[0].text} page="home"/>
    </ContainerHome>
  )
}
