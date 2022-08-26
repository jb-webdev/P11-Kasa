import React from 'react'
import "./Footer.css"
import logoWhite from "../../img/logo-kasa-white.png"

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-logo">
        <img  src={logoWhite} alt="logo" />
      </div>
        <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer