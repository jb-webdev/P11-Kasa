/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P11 OC
 * Date : Aout 2022
 */
import React from 'react'
import './style.css'

export default function Stars(props) {
  const nbrGreyStars = 5 - props.rating

  return (
    <div className='starsWrapper'>

      {(() => {
        let stars = [];
        for (let i = 0; i < props.rating; i++) {
          stars.push(
            <span className='spanStar colorStar' key={`colorStarSpan` + i}>
              <i className="fa-solid fa-star" key={`colorStar` + i}></i>
            </span>)
        }
        return stars
      })()}
      {(() => {
        let stars = [];
        for (let i = 0; i < nbrGreyStars; i++) {
          stars.push(
            <span className='spanStar greyStar' key={`greyStarSpan` + i}>
              <i className="fa-solid fa-star" key={`greyStar` + i}></i>
            </span>)
        }
        return stars
      })()}

    </div>
  )
}