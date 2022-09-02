/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
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