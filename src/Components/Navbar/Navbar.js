/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../services/img/logo-kasa.png'

import {NavBar, ContainerLink, HeaderLink, Logo} from './Navbar.elements.js'

export default function Navbar() {
  return (
    <NavBar>
      <Link to='/' >
        <Logo src={logo} alt='logo' />
      </Link>

      <ContainerLink>
        <HeaderLink to='/'>Accueil</HeaderLink>
        <HeaderLink to='/About'>À propos</HeaderLink>
      </ContainerLink>
    </NavBar>
  )
}




