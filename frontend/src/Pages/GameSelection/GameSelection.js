import React from 'react'
import GameObject from '../../Components/GameSelection/GameObject'

const GameSelection = () => {
    const GAMES = [{
        name: "Rock Paper Scissors",
        page: "rps"
    },{
        name: "Rps",
        page: "rps"
    },{
        name: "Rps",
        page: "rps"
    },{
        name: "Rps",
        page: "rps"
    },]
    return (
        <div className='games'>
            {GAMES.map((item, index) => (
                <GameObject item={item} key={index} />
            ))}
        </div>
    )
}

export default GameSelection