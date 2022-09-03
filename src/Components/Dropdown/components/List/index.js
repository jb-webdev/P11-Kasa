/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'

export default function List(props) {

  return (

    <ul className='listContainer'>

      {props.description.map(
        item => 
        <li className='itemList' key={item}>
          {item}
        </li>
      )}

    </ul>

  )
}