import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import initialState from './initialState'

export const WGCAuthContext = createContext(null)
export const WGCAuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <WGCAuthContext.Provider value={{ state, dispatch }}>
        {children}
    </WGCAuthContext.Provider>
}
