/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import DataGlobal from '../../services/data/datasGlobal.json'

import Banner from '../../Components/Banner/index.js'

import Dropdown from '../../Components/Dropdown/index.js'

export default function About() {
  var countKey = 1
  return (
    <main id="aboutContainer">

      <Banner title="" classCompo = "imgTwo" image = "img-banner-two.png" position="center 40%"/>

      <section className='dropdownContainer'>
        {DataGlobal.About.map(
          data => <Dropdown 
                    sizemodel="large" 
                    bodyList= "text"
                    title={data.title} 
                    description={data.description} 
                    key={countKey ++}
                  />
        )}
    </section>
    </main>
  )
}