/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {WrapperDropdown} from './DropdownContainer.elements.js'
import Dropdown from '../../../Components/Dropdown/Dropdown.js'


import DataGlobal from '../../../services/data/datasGlobal.json'

export default function DropdownContainer() {
  
 var countKey = 1

  return (
    <WrapperDropdown>
      {DataGlobal.About.map(
            data =>
            <Dropdown key={countKey ++} title={data.title} description={data.description} model='large'/>
        )}
    </WrapperDropdown>
  )
}