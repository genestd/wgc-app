import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import initialState from './initialState'

export const WGCContext = createContext(null)
export const WGCProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <WGCContext.Provider value={{ state, dispatch }}>
        {children}
    </WGCContext.Provider>
}
