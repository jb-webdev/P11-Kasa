/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React from 'react'
import GallerySection from './Gallery.elements.js'
import Card from '../../../Components/Card/Card.js'


export default function Gallery(props) {
    //const datas = require('../../services/data/datas.json')
    
    return (
        <GallerySection>
            {props.datas.map(data => <Card key={data.id} title={data.title} link={"/lodging/" + data.id}/>)}
        </GallerySection>
    )
}

 