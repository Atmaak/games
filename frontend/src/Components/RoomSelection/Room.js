import React, { useState } from 'react'
import { useDataContext } from '../../DataContext'
const Room = ({ item }) => {
  const { history } = useDataContext()

  const redirect = () => {
    history(`/rps/${item.name}`)
  }
  return (
    <div className='RoomContainer'>
      <h1 className='RoomHeading'>{item.name}</h1>
      <button onClick={redirect} className='RoomButton'>Join</button>
    </div>
  )
}

export default Room