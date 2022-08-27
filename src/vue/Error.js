/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import styled from 'styled-components'

export default function Error() {
  return (
    <MainError>
        <p>Hello Page Error !</p>
    </MainError>
  )
}

const MainError = styled.main `
    color : red;
`
