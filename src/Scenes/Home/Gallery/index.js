/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import Card from '../../../Components/Card/index.js'
import datas from '../../../services/data/datas.json'

export default function Gallery() {
  console.log(datas[0].title)
  return (
    <section id="galleryContainer">
      {datas.map(data => <Card key={data.id} title={data.title} link={"/lodging/" + data.id}/>)
      }
    </section>
  )
}