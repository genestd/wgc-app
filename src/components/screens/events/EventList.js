import React, { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { WGCGlobalContext } from '../../../globalStore/context'
import { FETCH_EVENTS } from '../../../globalStore/globalActionTypes'
import ScreenHeader from '../../shared/ScreenHeader'
import LoadingScreen from '../../shared/LoadingScreen'
import EventCard from './EventCard'
import { StyleSheet } from 'react-native'
import { fetchEvents } from '../../../globalStore/globalActions'

const EventList = ({navigation}) => {
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)
    const loading = globalState.pendingActions.includes(FETCH_EVENTS)
    useEffect(() => {
        async function initializeEventsPage () {
            await fetchEvents(globalDispatch)
        }
        initializeEventsPage()
    }, [])
    return (
        <Layout style={styles.screenContainer}>
            <ScreenHeader iconName='pin-outline' title='Events' />
            {
                loading
                    ? <LoadingScreen />
                    : <FlatList
                        data={globalState.events}
                        renderItem={({item}) => <EventCard event={item} navigation={navigation} />}
                        keyExtractor={(item) => item.id}
                    />
                    
            }
        </Layout>     
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    }
})

export default EventList