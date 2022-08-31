import React from 'react'
import {TitleInfo, TitleLocation} from './InfoTitle.elements.js'

export default function InfoTitle(props) {
  return (
    <>
        <TitleInfo>{props.title}</TitleInfo>
        <TitleLocation>{props.location}</TitleLocation>
    </>
  )
}
