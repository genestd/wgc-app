import React from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const UserIcon = ({ avatar, username }) => {

return (
    <Layout style={styles.initCapContainer}>
        <Text style={styles.initCapAvatar}>{username[0].toUpperCase()}</Text>
    </Layout>
)
}

const styles = StyleSheet.create({
    initCapAvatar: {
        color: 'blue',
    },
    initCapContainer: {
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 25,
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default UserIcon