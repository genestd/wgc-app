import React from 'react'
import { Drawer, DrawerItem, IndexPath, Icon, Layout, Text } from '@ui-kitten/components'
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'

const NavDrawer = ({ navigation, state }) => {
    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => navigation.navigate(state.routeNames[index.row])}
            header={() => <NavHeader pressHandler={() => navigation.navigate('Settings')} />}
            footer={() => <NavFooter />}
        >
            <DrawerItem title='Events' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='pin-outline' />} />
            <DrawerItem title='Scoreboard' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='award-outline' />}/>
            <DrawerItem title='My Teams' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='people-outline' />}/>
        </Drawer>
    )
}

export default NavDrawer