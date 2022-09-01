/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
 import React from 'react'
 import {LodgingMain} from './Lodging.elements.js'
 
 import Slider from '../../Components/accomodationSheet/Slider/Slider.js'
 import SectionInfo from '../../Components/accomodationSheet/SectionInfo/SectionInfo.js'
 import SectionDescription from '../../Components/accomodationSheet/SectionDescription/SectionDescription.js'
 
 
 const dataLodging = [
  {
		id: "c67ab8a7",
		title: "Appartement cosy",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		pictures: [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		description: "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		host: {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		rating: "5",
		location: "Ile de France - Paris 17e",
		equipments: [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		tags: [
			"Batignolle",
			"Montmartre"
		]
	}
 ]

 export default function Lodging() {
   return (
     <LodgingMain>
       <Slider config={dataLodging[0].pictures} />
       <SectionInfo 
          title={dataLodging[0].title} 
          location={dataLodging[0].location} 
          tag={dataLodging[0].tags} 
          firstname="Alexandre"
          name="Dumas"
          rating={dataLodging[0].rating}
          />
       <SectionDescription description={dataLodging[0].description}equipments={dataLodging[0].equipments}/>
     </LodgingMain>
   )
 }
