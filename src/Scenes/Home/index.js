/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import datasGlobal from '../../services/data/datasGlobal.json'

import Banner from '../../Components/Banner/index.js'
import Gallery from './Gallery/index.js'

export default function Home() {
  return (
    <main id='HomeMain'>
      <Banner title={datasGlobal.Banner[0].text} page="home"/>
      <Gallery />
    </main>
  )
}