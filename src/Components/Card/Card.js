/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'
import {CardContainer, CardTitle} from './Card.elements.js'

export default function Card(props) {
  
  return (
    <CardContainer to={props.link}>
        <CardTitle >{props.title}</CardTitle>
    </CardContainer>
  )
}