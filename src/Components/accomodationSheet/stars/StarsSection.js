/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import React from 'react'
import {AiFillStar} from 'react-icons/ai'

import { StarsWrapper } from './StarsSection.elements'

export default function StarsSection(props) {

    const style = {color: '#FF6060', fontSize:'30px', marginLeft: '10px' }
    const styleTwo = {color: '#E3E3E3', fontSize:'30px', marginLeft: '10px' }
    
    const nbrGreyStars = 5 - props.rating 
    

  return (
    <StarsWrapper>
      {(() => {
        let stars = [];
        for (let i = 0; i < props.rating; i++) {
          stars.push(<AiFillStar style={style} key={`colorStar` + i}/> )
        }
        return stars
      })()}

      {(() => {
          let stars = [];
          for (let i = 0; i < nbrGreyStars; i++) {
            stars.push(<AiFillStar style={styleTwo} key={`greyStar` + i}/> )
          }
          return stars
        })()}
        
    </StarsWrapper>
  )
}
