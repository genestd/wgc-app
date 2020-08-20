import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Card, Text, Layout, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import UserIcon from '../../shared/UserIcon'
import ImageWithOverlays from '../../shared/ImageWithOverlays'
import { getFirst30Words } from '../../../utils'
import EventPlaceTime from '../../shared/EventPlaceTime'
import { WGCGlobalContext } from '../../../globalStore/context'
import { registerUserForEvent } from '../../../globalStore/globalActions'

const EventCard = ({event, navigation}) => {
    const { globalState, globalDispatch } = useContext(WGCGlobalContext)
    const { user } = globalState
    const registered = Array.isArray(event.registeredUsers.items) && event.registeredUsers.items.find(item => item.userId === user.id)
    return (
        <Card
            header={() => {
                return <ImageWithOverlays
                    imageUrl={event.primaryImage}
                    overlayTop={<Header title={event.name} subtitle={event.tagline} />}
                    overlayBottom={null}
                />
            }}
            footer={() => <Layout style={{padding: 15}}><EventPlaceTime event={event} mods={{padding: 15}}/></Layout>}
            onPress={() => navigation.navigate('Detail', { event })}
        >
            <Layout marginHorizontal={-16}>
                <Text style={styles.bodyText}>{getFirst30Words(event.description)}</Text>
            </Layout>
            <Layout marginHorizontal={-16} style={{...styles.row, ...styles.right}}>
                {!registered && (
                    <>
                    <Button appearance='ghost' style={{...styles.row, paddingRight: 0}} onPress={() => registerUserForEvent(user, event, globalDispatch)}>
                        Register
                    </Button>
                    <LottieView source={require('../../shared/success-check.json')} loop={false} autoPlay={true} style={{height: 50}}/>
                    </>
                )}
                
            </Layout>
        </Card>
    )
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}

const Header = ({ title, subtitle }) => (
    <>
        <Text  style={styles.headerText} category='h2'>
            {title}
        </Text>
        <Text  style={styles.headerText} category='s1'>
            {subtitle}
        </Text>
    </>
)

const RegisteredUserList = ({ style, users = []}) => {
    return (
        <Layout style={{...style}}>
            {users.length == 0
                ? <Button appearance='ghost' style={{paddingRight: 0}}>Be first to register</Button>
                : users.map(user => <UserIcon key={user.id} avatar={user.avatar} username={user.username} /> )}
        </Layout>
    )
}

RegisteredUserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }))
}

const styles = StyleSheet.create({
    headerText: {
        color: '#fff'
    },
    bodyText: {
        color: 'black',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    right: {
        justifyContent: 'flex-end',
    },
})

export default EventCard