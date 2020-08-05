import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import styles from './styles'
const Login = () => {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMessageContainer}>
                <Text style={styles.loginMessage}>
                    New User?
                </Text>
                <Button
                    appearance='ghost'
                    size='tiny'
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
            />
            <Input
                style={styles.loginInput}
                placeholder='Password'
                size='large'
            />
            <Button>
                <Text>
                    Sign In
                </Text>
            </Button>
        </View>
    )
}

export default Login