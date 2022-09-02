/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Link className="card" to={props.link}>
      <p className="cardTitle">{props.title}</p>
    </Link>
  )
}