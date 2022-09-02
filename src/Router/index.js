/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */

 import React from 'react'
 import { Routes, Route } from "react-router-dom"

 import Home from '../Scenes/Home/index.js'
 import Error from '../Scenes/Error/index.js'

 
 
 export default function AppRouter() {
   return (
     <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
     </>
   )
 }
/**
 import Composants
 import Navbar from './Components/Navbar/Navbar.js'
 import Footer from './Components/Footer/Footer.js'

 import About from './Scenes/About/About.js'
 import Lodging from './Scenes/Lodging/Lodging.js'

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




 */

 