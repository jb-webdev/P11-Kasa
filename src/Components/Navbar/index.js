/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'
import logo from '../../services/img/logo-kasa.png'

export default function Navbar() {
  const navigate = useLocation()
  var HomeClassLink = "navbarLink"
  var AboutclassLink = "navbarLink"
  if (navigate.pathname === "/"){
    HomeClassLink = "navbarLink active"
    AboutclassLink = "navbarLink"
  } else if (navigate.pathname === "/about"){
    HomeClassLink = "navbarLink"
    AboutclassLink = "navbarLink active"
  } else {
    HomeClassLink = "navbarLink"
    AboutclassLink = "navbarLink"
  }

  return (
    <div className="navBarContainer">
      <Link className="navbarLinkLogo" to="/" >
        <img className="navbarLogo" src={logo} alt="logo" />
      </Link>
      <div className="navbarWrapperLink">
        <Link className={HomeClassLink} to="/">Accueil</Link>
        <Link className={AboutclassLink}to="/about">À propos</Link>
      </div>
    </div>
  )
}