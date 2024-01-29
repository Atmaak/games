import React from 'react'
import Room from './Room'

const Rooms = ({ rooms }) => {
  return (
    <div className='RoomsContainer'>
      { rooms.map((item, index) => (
        <Room item={item} key={index} />
      ))}
    </div>
  )
}

export default Rooms