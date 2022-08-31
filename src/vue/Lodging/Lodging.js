/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {LodgingMain} from './Lodging.elements.js'

import SectionCarrousel from '../../Components/accomodationSheet/SectionCarrousel/SectionCarrousel.js'
import SectionInfo from '../../Components/accomodationSheet/SectionInfo/SectionInfo.js'


export default function Lodging() {
  return (
    <LodgingMain>
      <SectionCarrousel />
      <SectionInfo />
    </LodgingMain>
  )
}
