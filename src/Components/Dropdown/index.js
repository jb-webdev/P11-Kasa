/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 * 
 * compo type 
    <Dropdown 
          sizemodel="model du composant large or medium" 
          bodyList= "type de composant description text ou list"
          title="titre du composant"
          description="description du composant"
        />
 */
import React, {useState} from 'react'
import './style.css'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export default function Dropdown(props) {
  var sizeModel = props.sizemodel
  var classWrapper
  var classheader
  var classheaderText
  var classBody 
  var classOPen = ""
  var classCompo = ""
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
  // ici on gère l'ouverture et la fermeture du dropdown
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(!isOpen)
  if (isOpen){
    classOPen = " openBody"
  }
  
  /** ici on gère les classe du compo selon la taille désiré */
  if(props.sizeModel === "large"){
    classCompo = "textBodydropdown largeTextBodyDropdown"
  } else {
    classCompo = "textBodydropdown mediumTextBodyDropdown"
  }



  return (
    <div className={classWrapper}>
      
      <div className={classheader} onClick={handleClick}>
        <p className={classheaderText}>{props.title}</p>
        {isOpen ? <MdKeyboardArrowUp style={styleIconeUp}/> : <MdKeyboardArrowDown style={styleIconeDown} />}
      </div>

      <div className={classBody + classOPen}>
        {props.bodyList === 'text' ? 
          <p className={classCompo}>{props.description}</p> 
        : 
          <ul className='listContainer'>
            {props.description.map(item => <li className='itemList' key={item}>{item} </li>)}
          </ul>
        }
      </div>
      
    </div>
  )
}