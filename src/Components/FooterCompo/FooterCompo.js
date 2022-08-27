import React from 'react'
import {Footer, WrapperLogo, Logo, Copyright} from './FooterCompo.elements'
import logoWhite from '../../img/logo-kasa-white.png'

function FooterCompo(props) {
  return (
    <Footer>
        <WrapperLogo>
            <Logo src={logoWhite} alt='logo'/>
        </WrapperLogo>
        <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </Footer>
  )
}

export default FooterCompo