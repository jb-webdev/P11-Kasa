/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './App.css'
import AppRouter from './Router/index.js'
import Navbar from './Components/Navbar/index.js'
import Footer from './Components/Footer/index.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}