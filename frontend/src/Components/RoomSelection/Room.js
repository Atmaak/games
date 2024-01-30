import React, { useState } from 'react'
import { useDataContext } from '../../DataContext'
import { getSocket } from '../../socket'
const Room = ({ item }) => {
  const { history } = useDataContext()

  const redirect = () => {
    getSocket().emit('join_room', JSON.stringify({room_uuid: item.name}))
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