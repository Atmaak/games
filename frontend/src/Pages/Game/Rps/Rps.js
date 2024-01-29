import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { initializeSocket } from '../../../socket'

const Rps = () => {
  const { room_uuid } = useParams()

  const [socket, setSocket] = useState(null)

  /* useEffect(() => {
    if (socket === null) {
      setSocket(initializeSocket(room_uuid, "/rps"))
    }
    console.log(socket)
    
  }, [socket]) */

  const connect = () => {
    if (socket === null) {
      setSocket(initializeSocket(room_uuid, "/rps"))
    }
    console.log(socket)
  }

  return (
    <div>
      {room_uuid}

      <button onClick={connect}>xxxx</button>
    </div>
  )
}

export default Rps
