import React, {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {DropdownWrapper, DropdownHeader,DropdownHeaderText, DropdownBody, DropdownBodyText} from './DropdownCompo.elements'



  
function DropdownCompo(props) {

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
console.log(isOpen)

// <DropdownHeader onClick={handleClick}>
  return (
    <DropdownWrapper>
        <DropdownHeader onClick={handleClick} size={props.size}>
            <DropdownHeaderText>{props.title}</DropdownHeaderText>
            {isOpen ? <MdKeyboardArrowUp style={styleIconeUp}/> : <MdKeyboardArrowDown style={styleIconeDown} />}
        </DropdownHeader>
        <DropdownBody $mode={isOpen} size={props.size}>
            <DropdownBodyText>{props.description}</DropdownBodyText>
        </DropdownBody>
    </DropdownWrapper>
  )
}

export default DropdownCompo