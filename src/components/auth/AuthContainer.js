import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../shared/Logo'
import Login from './Login'
import Register from './Register'
import ConfirmRegistration from './ConfirmRegistration'
import ResetPassword from './ResetPassword'

const AuthContainer = () => {
    return (
        <View style={styles.loginContainer}>
            <LinearGradient
                style={styles.loginGradient}
                colors={['rgba(85, 88, 90, 1)', 'rgba(60, 63, 65, 1)', 'rgba(35, 38, 40, 1)']}
            >
                <Logo />
                <ResetPassword />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        width: '100%',
    },
    loginGradient: {
        paddingTop: 15,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
})

export default AuthContainer