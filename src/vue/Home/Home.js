/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import ContainerHome from './Home.elements.js'
import BannerCompo from '../../Components/BannerCompo/BannerCompo.js'

import GallerySection from '../../Components/GallerySection/GallerySection.js'

export default function Home(props) {
  return (
    <ContainerHome >
      <BannerCompo textBanner = {props.text} page={props.page}/>
      <GallerySection />
    </ContainerHome>
  )
}
