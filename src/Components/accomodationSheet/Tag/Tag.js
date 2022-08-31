/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {TagElement,TagElementText} from './Tag.elements.js'

export default function Tag(props) {
  return (
    <TagElement>
        <TagElementText>{props.text}</TagElementText>
    </TagElement>
  )
}
