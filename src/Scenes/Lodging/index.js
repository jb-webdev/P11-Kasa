/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react';
import { useParams } from 'react-router-dom'
import './style.css'

import GetLodging from './GetLodging.js'
import Error from '../Error/index.js'

import datas from '../../services/data/datas.json'


export default function Lodging() {
  // On utilise UseParmas pour recuperer l'id
  const params = useParams()
  // On utilise un function pour verifier si l'id existe ou pas
  const verifyId= (dataToVerify) => {
    var ifExist = false
    for (let i =0; i < dataToVerify.length; i++){
      if (dataToVerify[i].id.includes(params.id)) {
        return ifExist = true
      }
    }
    return ifExist
  }

  return (
    <main className="lodgingMain">
      {verifyId(datas) ? <GetLodging /> : <Error />}
    </main>
  )
}