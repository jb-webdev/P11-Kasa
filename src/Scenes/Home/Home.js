/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import ContainerHome from './Home.elements.js'
import Banner from '../../Components/Banner/Banner.js'
import Gallery from './Gallery/Gallery.js'

export default function Home(props) {
  const datas = require('../../services/data/datas.json')
  return (
    <ContainerHome >
      <Banner textBanner = {props.text} page={props.page}/>
      <Gallery datas={datas}/>
    </ContainerHome>
  )
}
