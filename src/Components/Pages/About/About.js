import React from 'react'
import "./About.css"

import Mask from '../../Mask/Mask'
import AboutSectionDropdown from '../../dropdown/AboutSectionDropdown.js'

function About() {
  return (
    <main id="main-about" >
        <Mask name={"two"}/>
        <AboutSectionDropdown />
    </main>
  )
}

export default About