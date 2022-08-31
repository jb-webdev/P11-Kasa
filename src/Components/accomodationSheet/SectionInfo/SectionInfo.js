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

function SectionInfo() {
  return (
    <InfoSection>
      
      <WrapperBoxOne>
        <WrapperTitle>
          <InfoTitle title="Cozy loft on the Canal Saint-Martin" location="Paris, iles de france"/>
          
        </WrapperTitle>
        <WrapperTag>
          <Tag text={"Cozy"}/>
          <Tag text={"Canal"}/>
          <Tag text={"Paris 10"}/>
        </WrapperTag>

      </WrapperBoxOne>
      
      <WrapperBoxTwo>
        <SectionProfile name="Dumas" firstName="Alexandre"/>
        <StarsSection />
      </WrapperBoxTwo>

    </InfoSection>
  )
}

export default SectionInfo
