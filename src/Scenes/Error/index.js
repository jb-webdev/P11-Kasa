/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import datasGlobal from '../../services/data/datasGlobal.json'

export default function Error() {
  return (
    <main id='ErrorMain'>
      <p className="ErrorParaph">{datasGlobal.Error[0].text}</p>
      <h1 className="ErrorH1">{datasGlobal.Error[0].title}</h1>
      <Link className="linkError" to="/">{datasGlobal.Error[0].textLink}</Link>
    </main>
  )
}