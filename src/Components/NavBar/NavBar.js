import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../img/logo-kasa.png";
function NavBar() {
  return (
    <nav id="navbar">
      <Link id="navbar-logo" to="/" ><img src={logo} alt="logo" /></Link>
      <div id="navbar-wrapper-link">
        <Link class="navbar-link" to="/">Accueil</Link>
        <Link class="navbar-link" to="/About">À propos</Link>
      </div>
    </nav>
  )
}

export default NavBar