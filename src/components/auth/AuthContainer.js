import React, { useContext } from 'react'
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../shared/Logo'
import Login from './Login'
import Register from './Register'
import ConfirmRegistration from './ConfirmRegistration'
import ResetPassword from './ResetPassword'
import { WGCContext } from '../../store/context'
import { CHANGE_AUTH_PAGE } from '../../store/actionTypes'

const AuthContainer = () => {
    const { state, dispatch } = useContext(WGCContext)
    function changeAuthPage (newPage) {
        dispatch({ type: CHANGE_AUTH_PAGE, payload: newPage })
    }

    function renderComponent (pageName) {
        switch (pageName) {
            case 'login':
                return <Login
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes('LOGIN')}
                />
            case 'register':
                return <Register
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes('REGISTER')}
                />
            case 'confirmRegistration':
                return <ConfirmRegistration />
            case 'resetPassword':
                return <ResetPassword />
            default:
                return <Login />
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.authContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient
                    style={styles.authGradient}
                    colors={['rgba(85, 88, 90, 1)', 'rgba(60, 63, 65, 1)', 'rgba(35, 38, 40, 1)']}
                >
                    <Logo />
                    {renderComponent(state.authPage)}
                    <View style={{ flex: 1 }} />
                </LinearGradient>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        width: '100%',
    },
    authGradient: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    },
})

export default AuthContainer