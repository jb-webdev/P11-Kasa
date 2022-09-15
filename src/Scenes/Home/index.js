/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import datasGlobal from '../../services/data/datasGlobal.json'
import datas from '../../services/data/datas.json'

import Banner from '../../Components/Banner/index.js'

import Card from '../../Components/Card/index.js'

export default function Home() {

  return (
    <main id='HomeMain'>
      <Banner title={datasGlobal.Banner[0].text} classCompo = "imgOne" image = "img-banner-one.png" position="center 45%"/>
      
      <section id="galleryContainer">
        {datas.map(data => <Card key={data.id} title={data.title} link={"/lodging/" + data.id}/>)}
      </section>
    </main>
  )
}