import React from 'react'
import { Text, Layout, useTheme } from '@ui-kitten/components'
import { S3Image } from 'aws-amplify-react-native'
import { StyleSheet } from 'react-native'

const UserIcon = ({ avatar, username, offset=0, overlap=true, size='normal' }) => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        initCapTextAvatar: {
            color: theme['color-info-500'],
            fontSize: size === 'normal' ? 14 : 50,
            fontFamily: size === 'normal' ? 'Spartan_500Medium' : 'Spartan_700Bold'
        },
        avatarContainer: {
            borderWidth: 2,
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-primary-200'],
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatarContainerOverlap: {
            borderWidth: 2,
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-primary-200'],
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            transform: [{translateX: offset}],
            zIndex: offset,
        },
        initCapContainer: {
            borderWidth: 2,
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-primary-200'],
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: size === 'normal' ? 3 : 15,
        },
        initCapContainerOverlap: {
            borderWidth: 2,
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-primary-200'],
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: size === 'normal' ? 3 : 15,
            position: 'absolute',
            transform: [{translateX: offset}],
            zIndex: offset,
        },
        normal: {
            height: 30,
            width: 30,
            borderRadius: 25
        },
        large: {
            height: 120,
            width: 120,
            borderRadius: 120,
        }

    })
    
    return (
        avatar ? (
            <Layout style={overlap ? {...styles.avatarContainerOverlap, ...styles[size]} : {...styles.avatarContainer, ...styles[size]}}>
                <S3Image imgKey={avatar} style={styles[size]} />
            </Layout>
        ) : (
            <Layout style={overlap ? {...styles.initCapContainerOverlap, ...styles[size]} : {...styles.initCapContainer, ...styles[size]}}>
                <Text style={styles.initCapTextAvatar}>{username[0].toUpperCase()}</Text>
            </Layout>
        )
    )
}

export default UserIcon