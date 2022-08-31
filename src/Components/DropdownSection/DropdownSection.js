import React from 'react'
import {WrapperDropdown} from './DropdownSection.elements.js'
import DropdownCompo from '../DropdownCompo/DropdownCompo'
import DataGlobal from '../../services/data/datasGlobal.json'

function DropdownSection() {
  
 var countKey = 1
  return (
    <WrapperDropdown>
      {DataGlobal.About.map(
            data =>
            <DropdownCompo key={countKey ++}title={data.title} description={data.description} size=""/>
        )}
    </WrapperDropdown>
  )
}

export default DropdownSection