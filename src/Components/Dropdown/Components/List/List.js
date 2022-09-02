import React from 'react'
import {ItemList} from './List.elements'

export default function List({item}) {
    console.log({item})
  return (
    <>
      <ItemList>{item}</ItemList>
    </>
  )
}

