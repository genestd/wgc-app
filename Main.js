
import 'react-native-gesture-handler';
import React, { useState, useContext, useEffect } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useFonts, Spartan_500Medium, Spartan_700Bold } from '@expo-google-fonts/spartan'
import { Cache } from 'aws-amplify'
import NavDrawer from './src/components/screens/NavDrawer'
import EventScreen from './src/components/screens/events/EventScreen'
import ScoreboardScreen from './src/components/screens/ScoreboardScreen'
import TeamsScreen from './src/components/screens/teams/TeamsScreen'
import ControlPanelScreen from './src/components/screens/controlPanel/ControlPanelScreen'
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCAuthContext } from './src/components/auth/store/context'
import { validateUserSession, authListener, logout } from './src/components/auth/store/authActions'
import { LOGIN_SUCCESS } from './src/components/auth/store/actionTypes'
import SettingsScreen from './src/components/screens/SettingsScreen'
import { addHubListeners, getDataFromCache, removeHubListeners } from './src/utils'
import { WGCGlobalContext } from './src/globalStore/context'
import { SET_LOGIN, INITIAL_DATA_LOADED } from './src/globalStore/globalActionTypes'
import { authEventHandler, fetchEvents } from './src/globalStore/globalActions';
import { addSubscriptions } from './src/services/db/dbUtils';

const {Navigator, Screen} = createDrawerNavigator()
const Main = () => {
    const [initializationComplete, setInitializationComplete] = useState(false)
    const {state, dispatch} = useContext(WGCAuthContext)
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)
    const WGCAuthListener = (data) => authEventHandler(data.payload, globalDispatch)
    const [fontsLoaded] = useFonts({
        Spartan_500Medium,
        Spartan_700Bold
    })
    
    useEffect(() => {
        let subs = []
        async function checkUser() {
            try {
                const user = await validateUserSession()
                dispatch({ type: LOGIN_SUCCESS, username: user.username })
                subs = addSubscriptions(globalDispatch)
                await fetchEvents(globalDispatch)
                // This flag tells the landing screen not to reload data
                globalDispatch({ type: INITIAL_DATA_LOADED, payload: true })
            } catch (error) {
                console.log(error)
                logout(dispatch)
                globalDispatch({ type: SET_LOGIN, payload: false })
            } finally {
                setInitializationComplete(true)
            }
        }

        addHubListeners({
            auth: authListener,
            WGCAuth: WGCAuthListener
        })
        checkUser()
        
        // on unmount: unsubscribe from hub and graphql subs
        return () => {
            removeHubListeners({
                auth: authListener,
                WGCAuth: WGCAuthListener
            })
            subs.forEach(sub => sub.unsubscribe())
        }
    }, [])

    // Show splash screen until fonts and resources are loaded 
    if (initializationComplete && fontsLoaded) {
        return globalState.loggedIn ? (
            <NavigationContainer>
                <Navigator
                    drawerContent={props => <NavDrawer {...props} user={globalState.user} />}
                    drawerStyle={{width: '85%'}}
                    initialRouteName='Events'
                >
                    <Screen name="Events" component={EventScreen} />
                    <Screen name="Scoreboard" component={ScoreboardScreen} />
                    <Screen name="My Teams" component={TeamsScreen} />
                    <Screen name="Manage Events" component={ControlPanelScreen} />
                    <Screen name="Settings" component={SettingsScreen} />
                </Navigator>
            </NavigationContainer>
        )
        : <AuthContainer />
    }
    return <AppLoading />
  }

  export default Main