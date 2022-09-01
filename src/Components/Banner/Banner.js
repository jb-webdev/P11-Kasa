/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {BannerContainer, BannerTitle} from './Banner.elements.js'

export default function Banner(props) {
  return (
    <BannerContainer $page={props.page}>
        <BannerTitle>{props.textBanner}</BannerTitle>
    </BannerContainer>
  )
}

