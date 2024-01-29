import React, { useState } from 'react'
import CreateRoom from '../../Components/RoomSelection/CreateRoom'
import Rooms from '../../Components/RoomSelection/Rooms'

const RoomSelection = () => {
  const [rooms, setRooms] = useState([])

  const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  const createRoom = async () => {
    let room = {
      name: makeid(12),
    }
    setRooms([room, ...rooms])
  }

  return (
    <div className='RoomSelectionContainer'>
      <CreateRoom createRoom={createRoom} />
      <Rooms rooms={rooms} />
    </div>
  )
}

export default RoomSelection