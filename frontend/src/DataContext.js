import React, { useContext, useState, useEffect } from 'react'
// import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
// import useAsyncState from './hook/useAsyncState'

const DataContext = React.createContext()

const apiLink = process.env.REACT_APP_API_LINK

export function useDataContext(){
    return useContext(DataContext)
}

export function DataProvider({ children }){
    const history = useNavigate()

    
    const value = {
        history
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}