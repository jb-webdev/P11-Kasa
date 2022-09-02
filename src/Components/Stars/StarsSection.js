/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'

import { StarsWrapper, StyledStar } from './StarsSection.elements.js'

export default function StarsSection(props) {
  
  const nbrGreyStars = 5 - props.rating 

return (
  <StarsWrapper>
    
    {(() => {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<StyledStar color='color' key={`colorStar` + i}/> )
    }
    return stars
  })()}

  {(() => {
      let stars = [];
      for (let i = 0; i < nbrGreyStars; i++) {
        stars.push(<StyledStar color='grey' key={`greyStar` + i}/> )
      }
      return stars
    })()}
     
  </StarsWrapper>
)
}