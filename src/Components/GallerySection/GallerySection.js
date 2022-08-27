/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'
import Gallery from './GallerySection.elements.js'
import CardCompo from '../CardCompo/CardCompo.js'


function GallerySection() {
    const datas = require('../../services/data/datas.json')
    return (
        <Gallery>
            {datas.map(data => <CardCompo key={data.id} title={data.title} />)}
        </Gallery>
    )
}

export default GallerySection