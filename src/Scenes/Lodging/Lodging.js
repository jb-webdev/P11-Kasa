/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
 import React from 'react'
 import { useParams } from 'react-router-dom'

 import {LodgingMain} from './Lodging.elements.js'
 
 import Slider from '../../Components/Slider/Slider.js'
 import InfoContainer from './InfoContainer/InfoContainer.js'
 import DescriptionContainer from './DescriptionContainer/DescriptionContainer.js'
  
 

 export default function Lodging() {
	// import des datas JSON
	const datas = require('../../services/data/datas.json')
	// On utilise UseParmas pour recuperer l'id
	const params = useParams()
	// Filter datas avec id
	const datasFound = datas.find(e => e.id === params.id)
	// split pour recuperer le nom et prénom
	var str = datasFound.host.name.split(" ", 2)
	
   return (
     <LodgingMain>
       <Slider config={datasFound.pictures} />
       <InfoContainer 
          title={datasFound.title} 
          location={datasFound.location} 
          tag={datasFound.tags} 
          firstname={str[0]}
          name={str[1]}
          rating={datasFound.rating}
          picture={datasFound.host.picture}
          />
       <DescriptionContainer description={datasFound.description}equipments={datasFound.equipments}/>
     </LodgingMain>
   )
 }
