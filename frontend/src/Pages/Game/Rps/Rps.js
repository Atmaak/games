import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getSocket } from '../../../socket'

const Rps = () => {
  const { room_uuid } = useParams()

  return (
    <div>
      {room_uuid}
      
    </div>
  )
}

export default Rps
