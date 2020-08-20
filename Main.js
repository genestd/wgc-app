
import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NavDrawer from './src/components/screens/NavDrawer'
import EventScreen from './src/components/screens/events/EventScreen'
import ScoreboardScreen from './src/components/screens/ScoreboardScreen'
import TeamsScreen from './src/components/screens/TeamsScreen'
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCAuthContext } from './src/components/auth/store/context'
import { validateUserSession, authListener, logout } from './src/components/auth/store/authActions'
import { LOGIN_SUCCESS } from './src/components/auth/store/actionTypes'
import SettingsScreen from './src/components/screens/SettingsScreen'
import { addHubListeners, removeHubListeners } from './src/utils'
import { WGCGlobalContext } from './src/globalStore/context'
import { SET_LOGIN } from './src/globalStore/globalActionTypes'
import { loginHandler } from './src/globalStore/globalActions';
import { addSubscriptions } from './src/services/db/dbUtils';

const {Navigator, Screen} = createDrawerNavigator()
const Main = () => {
    const {state, dispatch} = useContext(WGCAuthContext)
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)
    const WGCAuthListener = (data) => loginHandler(data.payload, globalDispatch)

    useEffect(() => {
        async function checkUser() {
            try {
                const user = await validateUserSession()
                dispatch({ type: LOGIN_SUCCESS, username: user.username })
                const subs = addSubscriptions()
            } catch (error) {
                console.log(error)
                logout(dispatch)
                globalDispatch({ type: SET_LOGIN, payload: false })
            }
        }
        addHubListeners({
            auth: authListener,
            WGCAuth: WGCAuthListener
        })
        checkUser()
        return () => removeHubListeners({
            auth: authListener,
            WGCAuth: WGCAuthListener
        })
    }, [])
    return globalState.loggedIn
        ? (
            <NavigationContainer>
                <Navigator
                    drawerContent={props => <NavDrawer {...props}/>}
                    drawerStyle={{width: '85%'}}
                >
                    <Screen name="Events" component={EventScreen} />
                    <Screen name="Scoreboard" component={ScoreboardScreen} />
                    <Screen name="My Teams" component={TeamsScreen} />
                    <Screen name="Settings" component={SettingsScreen} />
                </Navigator>
            </NavigationContainer>
        )
        : <AuthContainer />
  }

  export default Main