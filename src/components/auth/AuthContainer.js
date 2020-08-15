import React, { useContext } from 'react'
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import { Snackbar } from 'react-native-paper'
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../shared/Logo'
import Login from './Login'
import Register from './Register'
import ConfirmRegistration from './ConfirmRegistration'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import { WGCAuthContext } from './store/context'
import { CHANGE_AUTH_PAGE, LOGIN, REGISTER, GET_PW_RESET_CODE, RESET_PASSWORD,
    CONFIRM_SIGN_UP, SHOW_SNACKBAR } from './store/actionTypes'
import { getSnackbarStyle } from '../../utils'
import colors from '../../styles/colors'

const AuthContainer = () => {
    const { state, dispatch } = useContext(WGCAuthContext)
    const theme = useTheme()
    function changeAuthPage (newPage) {
        dispatch({ type: CHANGE_AUTH_PAGE, payload: newPage })
    }
    function closeSnackbar () {
        dispatch({ type: SHOW_SNACKBAR, visible: false })
    }

    function renderComponent (pageName) {
        switch (pageName) {
            case 'login':
                return <Login
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(LOGIN)}
                />
            case 'register':
                return <Register
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(REGISTER)}
                />
            case 'confirmRegistration':
                return <ConfirmRegistration
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(CONFIRM_SIGN_UP)}
                />
            case 'forgotPassword':
                return <ForgotPassword
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(GET_PW_RESET_CODE)}
                />
            case 'resetPassword':
                return <ResetPassword
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(RESET_PASSWORD)}
                />
            default:
                return <Login
                    onChangeAuthPage={changeAuthPage}
                    loading={state.pendingActions.includes(LOGIN)}
                />
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.authContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient
                    style={styles.authGradient}
                    colors={[colors.gradientStart, colors.gradientFinish]}
                >
                    <Logo />
                    {renderComponent(state.authPage)}
                    <View style={{ flex: 1 }} />
                </LinearGradient>
            </TouchableWithoutFeedback>
            <Snackbar
                visible={state.showAuthSnackbar}
                action={{ label: 'X', onPress: closeSnackbar}}
                onDismiss={closeSnackbar}
                style={getSnackbarStyle(state.snackbarType, theme)}
            >
                {state.snackbarContent}
            </Snackbar>
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