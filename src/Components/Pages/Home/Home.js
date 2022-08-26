import React from 'react';
import "./Home.css";
import Mask from '../../Mask/Mask';
import HomeGallery from "../../HomeGallery/HomeGallery.js"


function Home() {
  
  return (
    <main id="main-home">
        <Mask name={"one"}/>
        <HomeGallery />
    </main>
  )
};

export default Home;