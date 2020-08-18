import React from 'react'
import PropTypes from 'prop-types'
import { Card, Text, Layout, Button } from '@ui-kitten/components'
import { StyleSheet, Image } from 'react-native'
import { format } from 'date-fns'
import UserIcon from '../../shared/UserIcon'

const EventCard = ({event, navigation}) => {
    return (
        <Card
            header={() => <Header title={event.name} subtitle={event.tagline} mainImage={event.mainImage} />}
            footer={() => <Footer location={event.location} startDate={event.startDate} endDate={event.endDate} />}
            onPress={() => navigation.navigate('Detail', { event })}
        >
            <Layout marginHorizontal={-16}>
                <Text style={styles.bodyText}>{event.description}</Text>
            </Layout>
            <Layout marginHorizontal={-16}>
                <RegisteredUserList users={event.registeredUsers || []} style={{...styles.row, ...styles.right}} />
            </Layout>
        </Card>
    )
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}

const Header = ({ title, subtitle, mainImage }) => (
    <Layout style={styles.header}>
        <Image source={{uri: mainImage }} style={styles.image} resizeMode='cover' />
        <Layout style={styles.headerTextContainer}>
            <Text  style={styles.headerText} category='h2'>
                {title}
            </Text>
            <Text  style={styles.headerText} category='s1'>
                {subtitle}
            </Text>
        </Layout>
    </Layout>
)

const Footer = ({ location, startDate, endDate }) => (
    <Layout style={styles.footer}>
        <Text category='h6'>
            {location}
        </Text>
        <Layout style={styles.row}>
            <Text category='s1'>
                {format(new Date(startDate), 'MMM d')}
            </Text>
            <Text>
                &nbsp;-&nbsp;
            </Text>
            <Text category='s1'>
                {format(new Date(endDate), 'MMM d')}
            </Text>
        </Layout>
    </Layout>
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
    header: {
        padding: 0,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: 200,
    },
    headerText: {
        color: '#fff'
    },
    headerTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 15,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.35)',
        opacity: .75
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
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    }
})

export default EventCard