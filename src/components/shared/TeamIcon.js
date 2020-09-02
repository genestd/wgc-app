import React from 'react'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const TeamIcon = ({ name, avatar }) => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 1,
            borderRadius: 8,
            padding: 5,
            borderColor: theme['color-primary-500'],
            minWidth: 80,
            margin: 5
        }
    })

    return (
        <Layout style={styles.container}>
            <Text>{name}</Text>
        </Layout>
    )
}

export default TeamIcon