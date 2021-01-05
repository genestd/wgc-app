import React , { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { View, Keyboard } from 'react-native'
import { Text, Input, Button, Spinner } from '@ui-kitten/components'
import { WGCAuthContext } from './store/context'
import { validateInput, resetInput, confirmRegistration, resendConfirmCode } from './store/authActions'
import styles from './styles'

const ConfirmRegistration = ({ onChangeAuthPage, loading }) => {
    const {state, dispatch} = useContext(WGCAuthContext)
    const [username, setUsername] = useState(state.username || '')
    const [usernameStatus, setUsernameStatus] = useState('basic')
    const [usernameCaption, setUsernameCaption] = useState(null)
    const [confirmationCode, setConfirmationCode] = useState('')
    const [confirmationCodeStatus, setConfirmationCodeStatus] = useState('basic')
    const [confirmationCodeCaption, setConfirmationCodeCaption] = useState(null)
    const validateAndSubmit = () => {
        Keyboard.dismiss()
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)
            && validateInput('confirmationCode', confirmationCode,setConfirmationCodeStatus, setConfirmationCodeCaption)) {
            confirmRegistration(username, confirmationCode, dispatch)
        }
    }
    const validateAndResend = () => {
        Keyboard.dismiss()
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)) {
            resendConfirmCode(username, dispatch)
        }
    }
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMessageContainer}>
                <Text style={styles.loginMessage}>
                    Have an account?
                </Text>
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
                placeholder='Username'
                size='large'
                autoCapitalize='none'
                value={username}
                status={usernameStatus}
                onChangeText={setUsername}
                onBlur={() => validateInput('username', username, setUsernameStatus, setUsernameCaption)}
                onFocus={() => resetInput(setUsernameStatus, setUsernameCaption)}
                caption={usernameCaption}
                />
            <Input
                style={styles.loginInput}
                placeholder='Confirmation code'
                size='large'
                keyboardType='number-pad'
                value={confirmationCode}
                status={confirmationCodeStatus}
                onChangeText={setConfirmationCode}
                onBlur={() => validateInput('confirmationCode', confirmationCode,
                    setConfirmationCodeStatus, setConfirmationCodeCaption)}
                onFocus={() => resetInput(setConfirmationCodeStatus, setConfirmationCodeCaption)}
                caption={confirmationCodeCaption}
            />
            {state.confirmSignUpMsg ? <Text style={styles.loginErrorMessage}>{state.confirmSignUpMsg}</Text> : null}
            <Button
                size='large'
                onPress={validateAndSubmit}
                accessoryLeft={() => <View style={{position: 'absolute', left: 30}}><Spinner size='tiny' status='warning' style={{ opacity: loading ? 1 : 0 }}/></View>}
            >
                <Text>
                    Confirm Registration
                </Text>
            </Button>
            <View style={styles.loginMessageContainer}>
                <Button
                    appearance='ghost'
                    size='tiny'
                    onPress={validateAndResend}
                >
                    <Text style={styles.loginLink}>
                        Get new code
                    </Text>
                </Button>
            </View>
        </View>
    )
}

ConfirmRegistration.propTypes = {
    onChangeAuthPage: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default ConfirmRegistration