/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React, {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {
  DropdownWrapper, 
  DropdownHeader,
  DropdownHeaderText, 
  DropdownBody,
  ListContainer} from './Dropdown.elements.js'

import Text from './Components/Text/Text.js'
import List from './Components/List/List.js'

export default function Dropdown(props) {
  const dropdownModel = props.model
  // On utilise une condition pour le choix entre liste ou texte
  let compoText; 
  const bodyText = props.bodyText

  if (bodyText === "text"){
    compoText = <Text dropdownModel={dropdownModel} description={props.description}/>
  } else {
    compoText = <ListContainer> {props.description.map(item => <List item={item} key={item}/>)} </ListContainer>
  }
  // ici mets du style à nos ReactIcons
  const styleIconeUp = {
    display: 'block',
    color: '#ffffff',
    marginRight: '33.16px',
  }
  const styleIconeDown = {
    display: 'block',
    color: '#ffffff',
    marginRight: '33.16px',
  }
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(!isOpen)


  return (
    <DropdownWrapper model={dropdownModel}>
        <DropdownHeader onClick={handleClick} model={dropdownModel}>
            <DropdownHeaderText model={dropdownModel}>{props.title}</DropdownHeaderText>
            {isOpen ? <MdKeyboardArrowUp style={styleIconeUp}/> : <MdKeyboardArrowDown style={styleIconeDown} />}
        </DropdownHeader>
        <DropdownBody $mode={isOpen} model={dropdownModel}>
            {compoText}
        </DropdownBody>
    </DropdownWrapper>
  )
}