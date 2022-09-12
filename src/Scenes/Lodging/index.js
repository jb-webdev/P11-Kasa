/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react';
import './style.css'

import GetLodging from './GetLodging.js'
import Error from '../Error/index.js'
// recupere l'id useParams
// retour page error
let isOK = true

export default function Lodging() {
  return (
    <main className="lodgingMain">
      {isOK ? <GetLodging /> : <Error />}
      
    </main>
  )
}