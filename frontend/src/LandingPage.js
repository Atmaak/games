import React from 'react'
import GameSelection from './Pages/GameSelection/GameSelection'

const LandingPage = () => {
  return (
    <div className='landingPageContainer'>
        <h1 className="heading">Atmaak Games</h1>

        <GameSelection />
    </div>
  )
}

export default LandingPage