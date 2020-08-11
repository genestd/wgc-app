import React from 'react'
import { Drawer, DrawerItem, IndexPath, Icon } from '@ui-kitten/components'
import Constants from 'expo-constants'
import UserChip from '../shared/UserChip'

const NavDrawer = ({ navigation, state }) => {
    return (
        <>
            <UserChip style={{paddingTop: Constants.statusBarHeight}} />
            <Drawer style={{ flex: 1 }}
                selectedIndex={new IndexPath(state.index)}
                onSelect={index => navigation.navigate(state.routeNames[index.row])}
            >
                <DrawerItem title='Events' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='pin-outline' />} />
                <DrawerItem title='Scoreboard' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='award-outline' />}/>
                <DrawerItem title='My Teams' accessoryLeft={() => <Icon style={{ width: 25, height: 25}} fill='#ababab' name='people-outline' />}/>
            </Drawer>
        </>
    )
}

export default NavDrawer