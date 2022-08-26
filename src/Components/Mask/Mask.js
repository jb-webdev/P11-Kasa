import React from 'react'
import "./Mask.css"

function Mask(props) {
  
    let textMask;
    let styleMask;
    
    const renderSwitch = (paramProps) =>{
      switch(paramProps) {
        case 'one':
          textMask = "Chez vous, partout et ailleurs"
          styleMask = "compoMask-one"
          return ;
        case 'two':
          textMask = ""
          styleMask = "compoMask-two"
          return
        default:
          return "";
      }
    }
    
    renderSwitch(props.name)
  return (
    <section id={styleMask}>
        <h1 id="compoMask-one-h1">{textMask}</h1>
    </section>
  )
}

export default Mask