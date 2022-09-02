/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'

import {
  WrapperProfile, 
  OwnerName, 
  ProfileFirstName, 
  ProfileName, 
  ProfileImage} from './OwnerProfile.elements.js'

export default function OwnerProfile(props) {
  
  return (
    <WrapperProfile>
      <OwnerName>
        <ProfileFirstName>{props.firstName}</ProfileFirstName>
        <ProfileName>{props.name}</ProfileName>
      </OwnerName>
      <ProfileImage src={props.picture} alt="image de toto"/>
    </WrapperProfile>
  )
}

