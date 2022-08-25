import React from 'react';
import "./Home.css";
import Thumb from "./Thumb.js";

function Home() {
  return (
    <body id="home-body">
        <section id="home-section-one">
        <h1 id="home-h1">Chez vous, partout et ailleurs</h1>
        </section>
        <section id="home-section-gallery">
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
        </section>
        
    </body>
  )
};

export default Home;