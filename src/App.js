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
import datasGlobal from './services/data/datasGlobal.json'

export default function App() {
  return (
    <AppRoutes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home page="home" text={datasGlobal.Banner[0].text}/>} />
        <Route path="/about" element={<About page="about" text={datasGlobal.Banner[1].text}/>} />
        <Route path="/*" element={
            <Error 
                text={datasGlobal.Error[0].text}
                title={datasGlobal.Error[0].title} 
                textLink={datasGlobal.Error[0].textLink} 
            />} 
        />
      </Routes>
      
    </AppRoutes>
  )
}

// Style compo


const AppRoutes = styled.div`
  height: 100vh;
  width: 100%;
`

 
