import React, { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCContext } from './src/store/context'
import { validateUserSession } from './src/store/authActions'
import { LOGOUT, LOGIN_SUCCESS } from './src/store/actionTypes'

const Main = () => {
    const {state, dispatch} = useContext(WGCContext)
    useEffect(() => {
        async function checkUser() {
            return await validateUserSession()
        }
        const user = checkUser()
        if (!user) {
            dispatch({ type: LOGOUT })
        } else {
            dispatch({ type: LOGIN_SUCCESS, user: user.payload})
        }

    }, [])
    return state.loggedIn
        ? (
            <View style={{flex: 1, backgroundColor: 'green', display: 'flex', justifyContent: 'center'}}>
                <Button onPress={() => dispatch({type: LOGOUT})} title='Logout'>
                </Button>
            </View>
        )
        : <AuthContainer />
  }

  export default Main