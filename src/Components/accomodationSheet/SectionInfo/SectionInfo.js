/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import InfoTitle from '../InfoTitle/InfoTitle.js'
import Tag from "../Tag/Tag.js"
import SectionProfile from '../SectionProfile/SectionProfile.js'
import StarsSection from '../stars/StarsSection.js'


import {
  InfoSection, 
  WrapperBoxOne, 
  WrapperBoxTwo, 
  WrapperTitle, 
  WrapperTag
} from './SectionInfo.elements.js'

function SectionInfo(props) {
  console.log(props.tag)
  return (
    <InfoSection>
      <WrapperBoxOne>

        <WrapperTitle>
          <InfoTitle title={props.title} location={props.location} />
        </WrapperTitle>

        <WrapperTag>
          {props.tag.map(tag => <Tag text={tag}/>)}
        </WrapperTag>

      </WrapperBoxOne>
      
      <WrapperBoxTwo>

        <SectionProfile name={props.name} firstName={props.firstname}/>

        <StarsSection rating={props.rating}/>

      </WrapperBoxTwo>

      

    </InfoSection>
  )
}

export default SectionInfo
