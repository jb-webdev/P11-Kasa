import React from 'react'
import './DropDown.css'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

function DropDown(props) {
  
  let dropdownText;
  let dropdownDescription;

  const renderSwitch = (paramProps) => {
    switch (paramProps) {
      case 'one':
        dropdownText = 'Fiabilité'
        dropdownDescription = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        return;
      case 'two':
        dropdownText = 'Respect'
        dropdownDescription = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        return
      case 'three':
        dropdownText = 'Service'
        dropdownDescription = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
        return;
        case 'four':
        dropdownText = 'Sécurité'
        dropdownDescription = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
        return;
      default:
        dropdownText = ''
        dropdownDescription = ''
        return;
    }
  }
  renderSwitch(props.name)
  
  var styleIconeUp = {
    display: 'none',
    color: '#ffffff',
    marginRight: '33.16px',
  }
  var styleIconeDown = {
    display: 'block',
    color: '#ffffff',
    marginRight: '33.16px',
  }

  const toggleDropdown = (e) => {
    console.log(e.target.title)
    let elementsToggle = document.getElementById('idBody-'+e.target.title)
    if (elementsToggle.classList[1] === 'close'){
      styleIconeUp = {
        display: 'block',
      }
      styleIconeDown = {
        display: 'none',
      }
      elementsToggle.classList.replace('close', 'open')
    } else if (elementsToggle.classList[1] === "open"){
      styleIconeUp = {
        display: 'none',
      }
      styleIconeDown = {
        display: 'block',
      }
      elementsToggle.classList.replace('open', 'close')
    }
  }
  

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown} title={props.name}>
        <p className="dropdown-header-text">{dropdownText}</p>
        <MdKeyboardArrowDown style={styleIconeDown} />
        <MdKeyboardArrowUp style={styleIconeUp}/>
      </div>
      <div id={'idBody-'+props.name} className='dropdown-body close'>
        <p className='dropdown-body-text'>{dropdownDescription}</p>
      </div>
    </div>
  )
}

export default DropDown