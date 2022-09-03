/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React, {useState} from 'react'
import './style.css'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

import Text from './components/Text/index.js'
import List from './components/List/index.js'
export default function Dropdown(props) {
  var sizeModel = props.sizemodel
  var classModel = [
    "dropdownWrapper largeWrapper",
    "dropdownWrapper mediumWrapper",
    "headerDropdown largeHeader",
    "headerDropdown mediumHeader",
    "textHeaderDropdown largetextHeaderDropdown",
    "textHeaderDropdown mediumtextHeaderDropdown",
    "bodyDropdown largeBodyDropdown",
    "bodyDropdown mediumBodyDropdown ",
  ]

  var classWrapper
  var classheader
  var classheaderText
  var classBody 
  var classOPen = ""

  if (sizeModel === "large"){
      classWrapper = classModel[0]
      classheader = classModel[2]
      classheaderText = classModel[4]
      classBody = classModel[6]
  } else {
      classWrapper = classModel[1]
      classheader = classModel[3]
      classheaderText = classModel[5]
      classBody = classModel[7]
  }

  // On utilise une condition pour le choix entre liste ou texte
  // let compoText; 
  // const bodyText = props.bodyText
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

  

  if (isOpen){
    classOPen = " openBody"
  }


  return (
    <div className={classWrapper}>
      
      <div className={classheader} onClick={handleClick}>
        <p className={classheaderText}>{props.title}</p>
        {isOpen ? <MdKeyboardArrowUp style={styleIconeUp}/> : <MdKeyboardArrowDown style={styleIconeDown} />}
      </div>

      <div className={classBody + classOPen}>
        {props.bodyList === 'text' ? 
        <Text sizeModel ={sizeModel} description={props.description}/> : <List description={props.description}/>}
      </div>
      
    </div>
  )
}