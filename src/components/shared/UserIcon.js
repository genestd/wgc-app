import React from 'react'
import { Text, Layout, useTheme } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const UserIcon = ({ avatar, username, offset=0 }) => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        initCapAvatar: {
            color: theme['color-info-500'],
        },
        initCapContainer: {
            borderWidth: 2,
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-primary-200'],
            borderRadius: 25,
            width: 30,
            height: 30,
            paddingTop: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            transform: [{translateX: offset}],
            zIndex: offset,
        }
    })
    return (
        <Layout style={{...styles.initCapContainer}}>
            <Text style={styles.initCapAvatar}>{username[0].toUpperCase()}</Text>
        </Layout>
    )
}

export default UserIcon