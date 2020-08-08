import React , { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Keyboard } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import { WGCContext } from '../../store/context'
import { validateInput, resetInput, confirmRegistration } from '../../store/authActions'
import styles from './styles'

const ConfirmRegistration = ({ onChangeAuthPage, loading }) => {
    const {state, dispatch} = useContext(WGCContext)
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
                value={confirmationCode}
                status={confirmationCodeStatus}
                onChangeText={setConfirmationCode}
                onBlur={() => validateInput('confirmationCode', confirmationCode,
                    setConfirmationCodeStatus, setConfirmationCodeCaption)}
                onFocus={() => resetInput(setConfirmationCodeStatus, setConfirmationCodeCaption)}
                caption={confirmationCodeCaption}
            />
            {state.confirmSignUpMsg ? <Text style={styles.loginErrorMessage}>{state.confirmSignUpMsg}</Text> : null}
            <Button onPress={validateAndSubmit} style={styles.authbutton}>
                <Text>
                    Confirm Registration
                </Text>
            </Button>
        </View>
    )
}

ConfirmRegistration.propTypes = {
    onChangeAuthPage: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default ConfirmRegistration