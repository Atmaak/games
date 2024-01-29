import React from 'react'
import { useDataContext } from '../../DataContext'

const GameObject = ({ item }) => {
    const { history } = useDataContext()

    const redirect = () =>{ 
        history(item.page)
    }

    return (
        <div className='GameObjectContainer'>
            <h1 className='GameObjectHeading'>{item.name}</h1>
            <button onClick={redirect} className='GameObjectButton'>Play</button>
        </div>
    )
}

export default GameObject