import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import styles from './styles'

const Register = () => (
    <View style={styles.registerContainer}>
        <View style={styles.loginMessageContainer}>
            <Text style={styles.loginMessage}>
                Have an account?
            </Text>
            <Button
                appearance='ghost'
                size='tiny'
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
        />
        <Input
            style={styles.loginInput}
            placeholder='Password'
            size='large'
        />
        <Input
            style={styles.loginInput}
            placeholder='Confirm Password'
            size='large'
        />
        <Input
            style={styles.loginInput}
            placeholder='Phone number'
            size='large'
        />
        <Button>
            Register
        </Button>
    </View>
)

export default Register