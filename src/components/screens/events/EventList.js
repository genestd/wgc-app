import React, { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { WGCGlobalContext } from '../../../globalStore/context'
import { FETCH_EVENTS } from '../../../globalStore/globalActionTypes'
import ScreenHeader from '../../shared/ScreenHeader'
import EventFilter from './EventFilter'
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
            <ScreenHeader iconName='pin-outline' title='Events' headerRight={EventFilter} />
            {
                loading
                    ? <LoadingScreen />
                    : <FlatList
                        data={globalState.events.filter(event => globalState.eventFilter(event, globalState.user.id))}
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