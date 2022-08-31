import React from 'react'
import {AiFillStar} from 'react-icons/ai'

import { StarsWrapper } from './StarsSection.elements'

export default function StarsSection() {
    const style = {color: '#FF6060', fontSize:'30px', marginLeft: '10px' }
    const styleTwo = {color: '#E3E3E3', fontSize:'30px', marginLeft: '10px' }

  return (
    <StarsWrapper>
        <AiFillStar style={style}/>
        <AiFillStar style={style}/>
        <AiFillStar style={style}/>
        <AiFillStar style={styleTwo}/>
        <AiFillStar style={styleTwo}/>
    </StarsWrapper>
  )
}
