/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import DataGlobal from '../../../services/data/datasGlobal.json'
import Dropdown from '../../../Components/Dropdown/index.js'

export default function DropdownContainer() {
  var countKey = 1
  return (
    <section className='dropdownContainer'>

      
      {DataGlobal.About.map(
        data => <Dropdown 
                  sizemodel="large" 
                  bodyList= "text"
                  title={data.title} 
                  description={data.description} 
                  key={countKey ++}
                />
      )}
    </section>
  )
}