/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {ContainerError, TextError, TitleError, LinkError} from './Error.elements.js'

export default function Error() {
  return (
    <ContainerError>
        <TextError >
          404
        </TextError>
        <TitleError >
          Oups ! La page que vous demandez n'éxiste pas
        </TitleError>
        <LinkError to='/'>
          Retourner sur la page d'accueil
        </LinkError>
    </ContainerError>
  )
}


