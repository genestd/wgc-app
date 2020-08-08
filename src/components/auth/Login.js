import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Keyboard } from 'react-native'
import { Input, Button, Spinner } from '@ui-kitten/components'
import { WGCContext } from '../../store/context'
import { login, validateInput, resetInput } from '../../store/authActions'
import styles from './styles'

const Login = ({onChangeAuthPage, loading}) => {
    const {state, dispatch} = useContext(WGCContext)
    const [username, setUsername] = useState(state.username || '')
    const [usernameStatus, setUsernameStatus] = useState('basic')
    const [usernameCaption, setUsernameCaption] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordStatus, setPasswordStatus] = useState('basic')
    const [passwordCaption, setPasswordCaption] = useState(null)
    const validateAndSubmit = () => {
        Keyboard.dismiss()
        if (validateInput('username', username, setUsernameStatus, setUsernameCaption)
            && validateInput('password', password, setPasswordStatus, setPasswordCaption)) {
            login(username, password, dispatch)
        }
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMessageContainer}>
                <Text style={styles.loginMessage}>
                    New User?
                </Text>
                <Button
                    appearance='ghost'
                    size='tiny'
                    onPress={() => onChangeAuthPage('register')}
                >
                    <Text style={styles.loginLink}>
                        Sign up
                    </Text>
                </Button>
            </View>
            <Input
                style={styles.loginInput}
                placeholder='Username'
                label={username ? 'Username' : null}
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
                placeholder='Password'
                label={password ? 'Password' : null}
                size='large'
                value={password}
                autoCapitalize='none'
                secureTextEntry
                onChangeText={setPassword}
                status={passwordStatus}
                onBlur={() => validateInput('password', password, setPasswordStatus, setPasswordCaption)}
                onFocus={() => resetInput(setPasswordStatus, setPasswordCaption)}
                caption={passwordCaption}
            />
            {state.loginMessage ? <Text style={styles.loginErrorMessage}>{state.loginMessage}</Text> : null}
            <Button
                size='large'
                onPress={validateAndSubmit}
                accessoryLeft={() => <View style={{position: 'absolute', left: 30}}><Spinner size='tiny' status='warning' style={{ opacity: loading ? 1 : 0 }}/></View>}
            >
                <Text>
                    Sign In
                </Text>
            </Button>
            <View style={styles.loginMessageContainer}>
                <Button
                    appearance='ghost'
                    size='tiny'
                    onPress={() => onChangeAuthPage('forgotPassword')}
                >
                    <Text style={styles.loginLink}>
                        Forgot password?
                    </Text>
                </Button>
            </View>
        </View>
    )
}

Login.propTypes = {
    onChangeAuthPage: PropTypes.func,
    loading: PropTypes.bool
}

export default Login