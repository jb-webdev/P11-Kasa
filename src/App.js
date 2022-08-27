/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom"

// import Composants
import Navbar from './Components/Navbar/Navbar.js'
import Home from "./vue/Home/Home.js"
import About from './vue/About/About.js'
import Error from './vue/Error/Error.js'

export default function App() {
  return (
    <AppRoutes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </AppRoutes>
  )
}

// Style compo


const AppRoutes = styled.div`
  height: 100vh;
  width: 100%;
`

 
