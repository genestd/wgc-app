import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Layout, Text, Icon, useTheme } from '@ui-kitten/components'
import { WGCGlobalContext } from '../../globalStore/context'

const NavHeader = ({ pressHandler }) => {
    const theme = useTheme()
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)

    return (
        <Layout style={styles.chipContainer}>
            <Layout style={styles.chipRow}>
                <Icon
                    style={styles.largeIcon}
                    name='person-outline'
                    fill={theme['color-info-500']}
                />
                <Icon
                    style={styles.smallIcon}
                    name='options-2-outline'
                    fill={theme['color-info-500']}
                    onPress={pressHandler}
                />
            </Layout>
            <Layout>
                <Text category='h6' style={styles.chipName}>
                    {globalState.user.screenName || globalState.user.id}
                </Text>
                <Text category='s1' style={styles.chipName}>
                    {`@${globalState.user.id}`}
                </Text>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    chipContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 35
    },
    chipRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chipName: {
        paddingTop: 10,
        paddingLeft: 7
    },
    largeIcon: {
        height: 50,
        width: 50
    },
    smallIcon: {
        height: 25,
        width: 25
    }
})

export default NavHeader