import React from 'react'
import { ContainerDescription } from './DescriptionContainer.elements.js'
import Dropdown from '../../../Components/Dropdown/Dropdown.js'


export default function DescriptionContainer(props) {
  //console.log(props.description)
  //console.log(props.equipments)

  return (
    <ContainerDescription>
      <Dropdown title={'Description'} description={props.description} model='medium' />
      <Dropdown title={"Équipements"} description={props.equipments} model='medium' />
    </ContainerDescription>
  )
}
