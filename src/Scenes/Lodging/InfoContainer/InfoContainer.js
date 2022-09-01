/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'

import OwnerProfile from '../OwnerProfile/OwnerProfile.js'
import Tag from "../../../Components/Tag/Tag.js"


import InfoTitle from '../InfoTitle/InfoTitle.js'
import StarsSection from '../../../Components/Stars/StarsSection.js'


import {
  ContainerInfo, 
  WrapperBoxOne, 
  WrapperBoxTwo, 
  WrapperTitle, 
  WrapperTag
} from './InfoContainer.elements.js'

export default function InfoContainer(props) {
  
  return (
    <ContainerInfo>
      <WrapperBoxOne>
        
        <WrapperTitle>
          <InfoTitle title={props.title} location={props.location} />
        </WrapperTitle>

        <WrapperTag>
          {props.tag.map(tag => <Tag text={tag} key={`tag-` + tag}/>)}
        </WrapperTag>

      </WrapperBoxOne>
      
      <WrapperBoxTwo>

        <OwnerProfile name={props.name} firstName={props.firstname} picture={props.picture}/>

        <StarsSection rating={props.rating}/>

      </WrapperBoxTwo>
    </ContainerInfo>
  )
}
