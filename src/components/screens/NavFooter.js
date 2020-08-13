import React, { useContext } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Layout, Icon, useTheme, Text } from '@ui-kitten/components'
import { WGCGlobalContext } from '../../globalStore/context'
import { SET_LOGIN } from '../../globalStore/globalActionTypes'

const NavFooter = () => {
    const theme = useTheme()
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)
    return (
        <TouchableWithoutFeedback onPress={() => globalDispatch({ type: SET_LOGIN, payload: false })}>
            <Layout style={styles.container}>
                <Icon
                    name='log-out-outline'
                    fill={theme['color-info-500']}
                    style={styles.icon}
                />
                <Text>Sign out</Text>
            </Layout>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 50
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 15
    }
})

export default NavFooter