/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import logoWhite from '../../services/img/logo-kasa-white.png'

export default function Footer() {
  return (
    <footer id="footerContainer">
      <div className="footerWrapperLogo">
        <img className="footerLogo" src={logoWhite} alt="logo principale de l'application"/>
      </div>
      <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}