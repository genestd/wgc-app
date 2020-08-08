import React, { useContext, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Input, Button, Spinner } from '@ui-kitten/components'
import { WGCContext } from '../../store/context'
import { getResetPasswordCode, resetInput, validateInput } from '../../store/authActions'
import styles from './styles'
import { SET_FORGOT_PW_MSG } from '../../store/actionTypes'

const ForgotPassword = ({ onChangeAuthPage, loading }) => {
    const {state, dispatch} = useContext(WGCContext)
    const [username, setUsername] = useState(state.username || '')
    const [usernameStatus, setUsernameStatus] = useState('basic')
    const [usernameCaption, setUsernameCaption] = useState(null)
    const validateAndSubmit = ({ loading }) => {
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)) {
            getResetPasswordCode(username, dispatch)
        }
    }
    useEffect(() => dispatch({ type: SET_FORGOT_PW_MSG, message: ''}), [])
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMessageContainer}>
                <Button
                    appearance='ghost'
                    size='tiny'
                    onPress={() => onChangeAuthPage('login')}
                >
                    <Text style={styles.loginLink}>
                        Sign in
                    </Text>
                </Button>
            </View>
            <Input
                style={styles.loginInput}
                label={username ? 'Username' : null}
                placeholder='Username'
                size='large'
                autoCapitalize='none'
                status={usernameStatus}
                value={username}
                onChangeText={setUsername}
                onBlur={() => validateInput('username', username, setUsernameStatus, setUsernameCaption)}
                onFocus={() => resetInput(setUsernameStatus, setUsernameCaption)}
                caption={usernameCaption}
            />
            {state.forgotPasswordMsg ? <Text style={styles.loginErrorMessage}>{state.forgotPasswordMsg}</Text> : null}
            <Button
                size='large'
                onPress={validateAndSubmit}
                accessoryLeft={() => <View style={{position: 'absolute', left: 30}}><Spinner size='tiny' status='warning' style={{ opacity: loading ? 1 : 0 }}/></View>}
            >
                <Text>
                    Reset Password
                </Text>
            </Button>
        </View>
    )
}

export default ForgotPassword