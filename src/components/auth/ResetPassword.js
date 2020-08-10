import React, { useContext, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Input, Button, Spinner } from '@ui-kitten/components'
import { WGCAuthContext } from './store/context'
import { resetPassword, resetInput, validateInput } from './store/authActions'
import { SET_FORGOT_PW_MSG } from './store/actionTypes'
import styles from './styles'

const ResetPassword = ({ onChangeAuthPage, loading }) => {
    const {state, dispatch} = useContext(WGCAuthContext)
    const [username, setUsername] = useState(state.username || '')
    const [usernameStatus, setUsernameStatus] = useState('basic')
    const [usernameCaption, setUsernameCaption] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordStatus, setPasswordStatus] = useState('basic')
    const [passwordCaption, setPasswordCaption] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState('basic')
    const [confirmPasswordCaption, setConfirmPasswordCaption] = useState(null)
    const [confirmationCode, setConfirmationCode] = useState('')
    const [confirmationCodeStatus, setConfirmationCodeStatus] = useState('basic')
    const [confirmationCodeCaption, setConfirmationCodeCaption] = useState(null)
    const validateAndSubmit = () => {
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)
            && validateInput('password', password, setPasswordStatus, setPasswordCaption)
            && validateInput('confirmPassword', confirmPassword, setConfirmPasswordStatus, setConfirmPasswordCaption, password)
            && validateInput('confirmationCode', confirmationCode, setConfirmationCodeStatus, setConfirmationCodeCaption)) {
            resetPassword(username, confirmationCode, password, dispatch)
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
            <Input
                style={styles.loginInput}
                label={password ? 'New Password' : null}
                placeholder='New password'
                secureTextEntry
                autoCapitalize='none'
                size='large'
                status={passwordStatus}
                value={password}
                onChangeText={setPassword}
                onBlur={() => validateInput('password', password, setPasswordStatus, setPasswordCaption)}
                onFocus={() => resetInput(setPasswordStatus, setPasswordCaption)}
                caption={passwordCaption}
            />
            <Input
                style={styles.loginInput}
                label={confirmPassword ? 'Confirm Password' : null}
                placeholder='Confirm password'
                autoCapitalize='none'
                secureTextEntry
                size='large'
                status={confirmPasswordStatus}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onBlur={() => validateInput(
                    'confirmPassword',
                    confirmPassword,
                    setConfirmPasswordStatus,
                    setConfirmPasswordCaption,
                    password
                )}
                onFocus={() => resetInput(setConfirmPasswordStatus, setConfirmPasswordCaption)}
                caption={confirmPasswordCaption}
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
            {state.resetPasswordMsg ? <Text style={styles.loginErrorMessage}>{state.resetPasswordMsg}</Text> : null}
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

export default ResetPassword