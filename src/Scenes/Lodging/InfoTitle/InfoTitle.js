/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {TitleInfo, TitleLocation} from './InfoTitle.elements.js'

export default function InfoTitle(props) {
  return (
    <>
        <TitleInfo>{props.title}</TitleInfo>
        <TitleLocation>{props.location}</TitleLocation>
    </>
  )
}
