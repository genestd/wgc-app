import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input, Button, Spinner } from '@ui-kitten/components'
import { WGCAuthContext } from './store/context'
import { register, resetInput, validateInput } from './store/authActions'
import styles from './styles'

const Register = ({onChangeAuthPage}) => {
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
    const [phone, setPhone] = useState('')
    const [phoneStatus, setPhoneStatus] = useState('basic')
    const [phoneCaption, setPhoneCaption] = useState(null)
    const [email, setEmail] = useState('')
    const [emailStatus, setEmailStatus] = useState('basic')
    const [emailCaption, setEmailCaption] = useState(null)

    const validateAndSubmit = () => {
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)
            && validateInput('password', password, setPasswordStatus, setPasswordCaption)
            && validateInput('confirmPassword', confirmPassword, setConfirmPasswordStatus, setConfirmPasswordCaption, password)
            && validateInput('phone', phone, setPhoneStatus, setPhoneCaption)
            ** validateInput('email', email, setEmailStatus, setEmailCaption)) {
                register(username, password, email, phone, dispatch)
            }
    }
    return (
        <View style={styles.registerContainer}>
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
                label={password ? 'Password' : null}
                placeholder='Password'
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
                placeholder='Confirm Password'
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
                label={phone ? 'Phone Number' : null}
                placeholder='Phone number'
                textContentType='telephoneNumber'
                keyboardType='number-pad'
                size='large'
                status={phoneStatus}
                value={phone}
                onChangeText={setPhone}
                onBlur={() => validateInput('phone', phone, setPhoneStatus, setPhoneCaption)}
                onFocus={() => resetInput(setPhoneStatus, setPhoneCaption)}
                caption={phoneCaption}
            />
            <Input
                style={styles.loginInput}
                label={email ? 'Email' : null}
                placeholder='Email'
                textContentType='emailAddress'
                keyboardType='email-address'
                size='large'
                status={emailStatus}
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
                onBlur={() => validateInput('email', email, setEmailStatus, setEmailCaption)}
                onFocus={() => resetInput(setEmailStatus, setEmailCaption)}
                caption={emailCaption}
            />
            <Button onPress={validateAndSubmit}>
                Register
            </Button>
            {state.registerMsg ? <Text style={styles.loginErrorMessage}>{state.registerMsg}</Text> : null}
        </View>
    )
}

Register.propTypes = {
    onChangeAuthPage: PropTypes.func
}

export default Register