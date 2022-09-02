import React from 'react'
import {CompoText} from './Text.elements.js'
//<DropdownBodyText model={dropdownModel}>{description}</DropdownBodyText>
export default function Text({dropdownModel, description}) {
  
  return (
    <>
      <CompoText model={dropdownModel}>{description}</CompoText>
    </>
  )
}
