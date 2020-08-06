import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Keyboard } from 'react-native'
import { Input, Button, Spinner } from '@ui-kitten/components'
import { WGCContext } from '../../store/context'
import { login } from '../../store/authActions'
import styles from './styles'

const Login = ({onChangeAuthPage, loading}) => {
    const {state, dispatch} = useContext(WGCContext)
    const [username, setUsername] = useState('')
    const [usernameStatus, setUsernameStatus] = useState('basic')
    const [usernameCaption, setUsernameCaption] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordStatus, setPasswordStatus] = useState('basic')
    const [passwordCaption, setPasswordCaption] = useState(null)
    const validate = (type, value) => {
        let valid = true
        switch (type) {
            case 'username':
                if (value.length < 3) {
                    valid = false
                    setUsernameStatus('danger')
                    setUsernameCaption(<Text>Username must be 3 characters</Text>)
                } else {
                    if (!value.match(/^[a-z0-9._-]{1,}$/igm)) {
                        valid = false
                        setUsernameStatus('danger')
                        setUsernameCaption(<Text>Username can only contain letters, numbers or ". - _"</Text>)    
                    }
                }
                break
            case 'password':
                if (value.length < 8) {
                    valid = false
                    setPasswordStatus('danger')
                    setPasswordCaption(<Text>Password must be 8 characters</Text>)
                }
                break
        }
        return valid
    }
    const validateAndSubmit = () => {
        Keyboard.dismiss()
        if (validate('username', username) && validate('password', password)) {
            login(username, password, dispatch)
        }
    }
    const handleUsernameChange = value => {
        setUsername(value)
    }
    const handlePasswordChange = value => {
        setPassword(value)
    }
    const resetInputStatus = (type) => {
        switch (type) {
            case 'username': 
                setUsernameStatus('basic')
                setUsernameCaption(null)
                break
            case 'password':
                setPasswordStatus('basic')
                setPasswordCaption(null)
                break
        }
    }
    const LoadingIndicator = () => <Spinner size='tiny' status='warning' style={{ opacity: loading ? 1 : 0}}/>

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
                size='large'
                value={username}
                onChangeText={handleUsernameChange}
                status={usernameStatus}
                onBlur={() => validate('username', username)}
                onFocus={() => resetInputStatus('username')}
                caption={usernameCaption}
                />
            <Input
                style={styles.loginInput}
                placeholder='Password'
                size='large'
                value={password}
                onChangeText={handlePasswordChange}
                status={passwordStatus}
                onBlur={() => validate('password', password)}
                onFocus={() => resetInputStatus('password')}
                caption={passwordCaption}
                />
            <Button accessoryLeft={LoadingIndicator} size='large' onPress={validateAndSubmit} style={styles.authbutton}>
                <Text>
                    Sign In
                </Text>
            </Button>
            {state.loginMessage ? <Text style={styles.loginMessage}>{state.loginMessage}</Text> : null}
        </View>
    )
}


Login.propTypes = {
    onChangeAuthPage: PropTypes.func,
    loading: PropTypes.bool
}

export default Login