/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import { ContainerDescription } from './DescriptionContainer.elements.js'
import Dropdown from '../../../Components/Dropdown/Dropdown.js'


export default function DescriptionContainer(props) {
  //console.log(props.description)
  //console.log(props.equipments)

  return (
    <ContainerDescription>
      <Dropdown title={'Description'} description={props.description} model='medium' bodyText="text"/>
      <Dropdown title={"Équipements"} description={props.equipments} model='medium' bodyText="list"/>
    </ContainerDescription>
  )
}
