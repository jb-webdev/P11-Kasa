/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {ContainerError, TextError, TitleError, LinkError} from './Error.elements.js'

export default function Error(props) {
  
  return (
    <ContainerError>
        <TextError>{props.text}</TextError>
        <TitleError>{props.title}</TitleError>
        <LinkError to='/'>{props.textLink}</LinkError>
    </ContainerError>
  )
}


