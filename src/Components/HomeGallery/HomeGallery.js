import React from 'react'
import "./HomeGallery.css"

import Thumb from '../Thumb/Thumb'


function HomeGallery() {
    let datas = require('../../data/data.json');
    console.log(datas.length);
    console.log(datas[0].title);

  return (
    <section id="section-gallery">
        {datas.map(data=><Thumb key={data.id} title={data.title}/>)}
    </section>
  )
}

export default HomeGallery
