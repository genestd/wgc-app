import React from 'react'
import { StyleSheet } from 'react-native'
import { Drawer, DrawerItem, IndexPath, Icon } from '@ui-kitten/components'
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'

const NavDrawer = ({ navigation, state, user }) => {
    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => navigation.navigate(state.routeNames[index.row])}
            header={() => <NavHeader pressHandler={() => navigation.navigate('Settings', { user })} />}
            footer={() => <NavFooter />}
        >
            <DrawerItem title='Events' accessoryLeft={() => <Icon style={styles.icon} fill='#ababab' name='pin-outline' />} />
            <DrawerItem title='Scoreboard' accessoryLeft={() => <Icon style={styles.icon} fill='#ababab' name='award-outline' />}/>
            <DrawerItem title='My Teams' accessoryLeft={() => <Icon style={styles.icon} fill='#ababab' name='people-outline' />}/>
            <DrawerItem title='Manage Events' accessoryLeft={() => <Icon style={styles.icon} fill='#ababab' name='settings-2-outline' />}/>
        </Drawer>
    )
}

const styles = StyleSheet.create({
    icon: { width: 25, height: 25}
})

export default NavDrawer