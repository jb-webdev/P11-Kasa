/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import React, {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {DropdownWrapper, DropdownHeader,DropdownHeaderText, DropdownBody, DropdownBodyText} from './Dropdown.elements.js'



  
export default function Dropdown(props) {
  const dropdownModel = props.model
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


// <DropdownHeader onClick={handleClick}>
  return (
    <DropdownWrapper model={dropdownModel}>
        <DropdownHeader onClick={handleClick} model={dropdownModel}>
            <DropdownHeaderText model={dropdownModel}>{props.title}</DropdownHeaderText>
            {isOpen ? <MdKeyboardArrowUp style={styleIconeUp}/> : <MdKeyboardArrowDown style={styleIconeDown} />}
        </DropdownHeader>
        <DropdownBody $mode={isOpen} model={dropdownModel}>
            <DropdownBodyText model={dropdownModel}>{props.description}</DropdownBodyText>
        </DropdownBody>
    </DropdownWrapper>
  )
}