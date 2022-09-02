import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../services/img/logo-kasa.png'

export default function Navbar() {
  return (
    <div className="navBarContainer">
      <Link className="navbarLinkLogo" to="/" >
        <img className="navbarLogo" src={logo} alt="logo" />
      </Link>
      <div className="navbarWrapperLink">
        <Link className="navbarLink" to="/">Accueil</Link>
        <Link className="navbarLink" to="/about">À propos</Link>
      </div>
    </div>
  )
}