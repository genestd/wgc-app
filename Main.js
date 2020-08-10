import React, { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCAuthContext } from './src/components/auth/store/context'
import { validateUserSession } from './src/components/auth/store/authActions'
import { LOGOUT, LOGIN_SUCCESS } from './src/components/auth/store/actionTypes'

const Main = () => {
    const {state, dispatch} = useContext(WGCAuthContext)
    useEffect(() => {
        async function checkUser() {
            const user = await validateUserSession()
            if (!user) {
                dispatch({ type: LOGOUT })
            } else {
                dispatch({ type: LOGIN_SUCCESS, user: user.username })
            }
        }
        const user = checkUser()
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