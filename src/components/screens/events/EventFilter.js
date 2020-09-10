import React, { useState, useContext } from 'react'
import Constants from 'expo-constants'
import { Icon, OverflowMenu, MenuItem, useTheme } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import { WGCGlobalContext } from '../../../globalStore/context'
import { SET_EVENT_FILTER } from '../../../globalStore/globalActionTypes'

const EventFilter = () => {
    const [visible, setVisible] = useState(false)
    const { globalState, globalDispatch } = useContext(WGCGlobalContext)
    const theme = useTheme()
    const handleMenuPress = value => {
        setVisible(false)
        globalDispatch({ type: SET_EVENT_FILTER, value })
    }
    const filterToggleIcon = () => (
        <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{ paddingTop: Constants.statusBarHeight, backgroundColor: 'transparent', height: 100, position: 'absolute', right: 15, bottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Icon  name='funnel-outline' fill={theme['color-info-500']} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
    )
    return (
        <OverflowMenu
            visible={visible}
            anchor={filterToggleIcon}
            onBackdropPress={() => setVisible(false)}>
            <MenuItem title='All' onPress={() => handleMenuPress('all')}/>
            <MenuItem title='Public Events' onPress={() => handleMenuPress('public')}/>
            <MenuItem title='My Events' onPress={() => handleMenuPress('user')}/>
        </OverflowMenu>
    )
}

export default EventFilter