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
import Footer from './Components/Footer/Footer.js'
import Home from "./Scenes/Home/Home.js"
import About from './Scenes/About/About.js'
import Error from './Scenes/Error/Error.js'
import Lodging from './Scenes/Lodging/Lodging.js'

// Import des datas de l'application
import datasGlobal from './services/data/datasGlobal.json'
// Style global de l'application
import GlobalStyle from './globalStyles.js'

export default function App() {
  return (
    <AppRoutes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home page="home" text={datasGlobal.Banner[0].text}/>} />
        <Route path="/about" element={<About page="about" text={datasGlobal.Banner[1].text} />} />
        <Route path="/lodging/:id" element={<Lodging/>} />
        <Route path="/*" element={
            <Error 
                text={datasGlobal.Error[0].text}
                title={datasGlobal.Error[0].title} 
                textLink={datasGlobal.Error[0].textLink} 
            />} 
        />
      </Routes>
      <Footer />
      <GlobalStyle />
    </AppRoutes>
  )
}

// Style compo
const AppRoutes = styled.div`
  height: 100vh;
  width: 100%;
`

 
