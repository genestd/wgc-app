import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Layout, Icon, Text, useTheme } from '@ui-kitten/components'
import PropTypes from 'prop-types'

const ScreenHeader = props => {
    const theme = useTheme()
    return (
        <Layout level='4' style={styles.header}>
            <Icon name={props.iconName} fill={theme['color-info-500']} style={styles.icon} />
            <Text>{props.title}</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 15
    }
})

ScreenHeader.propTypes = {
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default ScreenHeader