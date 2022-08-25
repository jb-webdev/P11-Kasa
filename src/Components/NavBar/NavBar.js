import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
    </nav>
  )
}

export default NavBar