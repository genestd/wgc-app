import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Card, Text, Layout, Button, Icon } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import UserIcon from '../../shared/UserIcon'
import ImageWithOverlays from '../../shared/ImageWithOverlays'
import { getFirst30Words, canRegister } from '../../../utils'
import EventPlaceTime from '../../shared/EventPlaceTime'
import { WGCGlobalContext } from '../../../globalStore/context'
import { registerUserForEvent } from '../../../globalStore/globalActions'

const EventCard = ({event, navigation}) => {
    const { globalState, globalDispatch } = useContext(WGCGlobalContext)
    const { user } = globalState
    const showRegistration = canRegister(event, user)
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
            <Layout style={{...styles.row, justifyContent: 'space-between'}} marginHorizontal={-16}>
                <RegisteredUserList users={event.registeredUsers.items} />
                <Layout style={styles.row}>
                    <LottieView
                        source={require('../../shared/success-check.json')}
                        loop={false}
                        autoPlay={globalState.sessionRegistrations.includes(event.id)}
                        style={{height: 50}}
                    /> 
                    {showRegistration && (
                        <Button
                            appearance='ghost'
                            style={{...styles.row, paddingRight: 0, paddingLeft: 5,alignItems: 'center'}}
                            onPress={() => registerUserForEvent(user, event, globalDispatch)}
                        >
                            Register
                        </Button>
                    )}
                </Layout>
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
        <Layout>
            <Layout style={{...styles.row, position: 'relative', minHeight: 50}}>
                {users.slice(0,4).map((user, index) => <UserIcon key={user.userId} avatar={user.avatar} username={user.userId} offset={20*index} /> )}
            </Layout>
            {users.length > 4 && <Text>+{users.length - 4} more</Text>}
        </Layout>
    )
}

RegisteredUserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.string.isRequired,
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
        alignItems: 'center'
    },
    right: {
        justifyContent: 'flex-end',
    },
})

export default EventCard