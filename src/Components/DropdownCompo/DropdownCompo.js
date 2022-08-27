import React, {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {Dropdown, DropdownHeader,DropdownHeaderText, DropdownBody, DropdownBodyText} from './DropdownCompo.elements'

function DropdownCompo(props) {

  const styleIconeUp = {
    display: 'none',
    color: '#ffffff',
    marginRight: '33.16px',
  }
  const styleIconeDown = {
    display: 'block',
    color: '#ffffff',
    marginRight: '33.16px',
  }
  const [isOpen, setOpen] = useState(true)
  const handleClick = () => {
    console.log(setOpen(!isOpen))
  }

  return (
    <Dropdown>
        <DropdownHeader onClick={handleClick}>
            <DropdownHeaderText>{props.title}</DropdownHeaderText>
            <MdKeyboardArrowDown style={styleIconeDown} />
            <MdKeyboardArrowUp style={styleIconeUp}/>
        </DropdownHeader>
        <DropdownBody>
            <DropdownBodyText>{props.text}</DropdownBodyText>
        </DropdownBody>
    </Dropdown>
  )
}

export default DropdownCompo