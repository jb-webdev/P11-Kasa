import React from 'react'
import "./AboutSectionDropdown.css"
import DropDown from './DropDown'

function AboutSectionDropdown() {
  return (
    <section className="section-dropdown-about">
        <DropDown name={"one"} />
        <DropDown name={"two"}/>
        <DropDown name={"three"}/>
        <DropDown name={"four"}/>
    </section>
  )
}

export default AboutSectionDropdown