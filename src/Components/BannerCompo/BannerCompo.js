/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {Banner, BannerTitle} from './BannerCompo.elements.js'

export default function BannerCompo(props) {
  return (
    <Banner>
        <BannerTitle>{props.textBanner}</BannerTitle>
    </Banner>
  )
}
