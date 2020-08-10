import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import INITIAL_STATE from './initialState'

export const WGCGlobalContext = createContext(null)
export const WGCGlobalProvider = ({ children }) => {
    const [globalState, globalDispatch] = useReducer(reducer, INITIAL_STATE)
    return <WGCGlobalContext.Provider value={{ globalState, globalDispatch }}>
        {children}
    </WGCGlobalContext.Provider>    
}
