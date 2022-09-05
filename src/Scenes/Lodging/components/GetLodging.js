import React from 'react'

import { useParams } from 'react-router-dom'

import './GetLodging.css'

import datas from '../../../services/data/datas.json'

import Slider from '../../../Components/Slider/index.js'
import ProfileTitle from '../../../Components/ProfileTitle/index.js'
import Tag from '../../../Components/Tag/index.js'
import ProfileOwnerName from '../../../Components/ProfileOwnerName/index.js'
import ProfileImage from '../../../Components/ProfileImg/index.js'
import Stars from '../../../Components/Stars/index.js'
import Dropdown from '../../../Components/Dropdown/index.js'



export default function GetLodging() {
    // On utilise UseParmas pour recuperer l'id
    const params = useParams()
    // Filter datas avec id
    const datasFound = datas.find(e => e.id === params.id)

    // split pour recuperer le nom et prénom
    var str = datasFound.host.name.split(" ", 2)
    // on creer le text de l'attribut de la balise image du profile
    var altImage = "image de profile de " + datasFound.host.name


  return (
    <>
        <Slider config={datasFound.pictures}/>

        <section className='sectionProfile'>
          <div className='wrapperBoxOne'>
            <div className='titleWrapper'>
              <ProfileTitle title={datasFound.title} location={datasFound.location} />
            </div>
            <div className='tagWrapper'>
              {datasFound.tags.map(tag => <Tag text={tag} key={tag}/>)}
            </div>
          </div>
          <div className='wrapperBoxTwo'>
            <div className='profileWrapper'>
              <ProfileOwnerName  firstname={str[0]} name={str[1]} />
              <ProfileImage src={datasFound.host.picture} alt={altImage} />
            </div>
            <Stars rating={datasFound.rating}/>
          </div>
        </section>


        <section className='sectionDescription'>
          <Dropdown title='Description' sizemodel='medium' bodyList= "text" description={datasFound.description} />
          <Dropdown title='Équipement' sizemodel='medium' bodyList= "list" description={datasFound.equipments} />
        </section>
    </>
  )
}
