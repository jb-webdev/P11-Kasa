/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'
import {Card, CardTitle} from './CardCompo.elements.js'

function CardCompo(props) {
  return (
    <Card>
        <CardTitle>{props.title}</CardTitle>
    </Card>
  )
}

export default CardCompo