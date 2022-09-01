/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'
import {FooterContainer, WrapperLogo, Logo, Copyright} from './Footer.elements.js'
import logoWhite from '../../services/img/logo-kasa-white.png'

export default function Footer(props) {
  return (
    <FooterContainer>
        <WrapperLogo>
            <Logo src={logoWhite} alt='logo'/>
        </WrapperLogo>
        <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  )
}

