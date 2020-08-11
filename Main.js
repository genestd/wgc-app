
import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NavDrawer from './src/components/screens/NavDrawer'
import EventScreen from './src/components/screens/EventScreen'
import ScoreboardScreen from './src/components/screens/ScoreboardScreen'
import TeamsScreen from './src/components/screens/TeamsScreen'
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCAuthContext } from './src/components/auth/store/context'
import { validateUserSession } from './src/components/auth/store/authActions'
import { LOGOUT, LOGIN_SUCCESS } from './src/components/auth/store/actionTypes'

const {Navigator, Screen} = createDrawerNavigator()
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
            <NavigationContainer>
                <Navigator
                    drawerContent={props => <NavDrawer {...props}/>}
                    drawerStyle={{width: '85%'}}
                >
                    <Screen name="Events" component={EventScreen} />
                    <Screen name="Scoreboard" component={ScoreboardScreen} />
                    <Screen name="My Teams" component={TeamsScreen} />
                </Navigator>
            </NavigationContainer>
        )
        : <AuthContainer />
  }

  export default Main