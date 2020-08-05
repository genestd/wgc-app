import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import styles from './styles'
const ConfirmRegistration = () => {
    return (
        <View style={styles.loginContainer}>
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
                placeholder='Confirmation code'
                size='large'
            />
            <Button>
                <Text>
                    Confirm Registration
                </Text>
            </Button>
        </View>
    )
}

export default ConfirmRegistration