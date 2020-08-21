import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { format } from 'date-fns'

const EventPlaceTime = ({ event, mode='light' }) => {
    const styles = StyleSheet.create({
        row: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'transparent',
        },
        footer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'transparent'
        },
        text: {
            color: mode==='light' ? '#000' : '#fff'
        }
    })

    return (
        <Layout style={styles.footer}>
            <Text category='h6' style={styles.text}>
                {event.location}
            </Text>
            <Layout style={styles.row}>
                <Text category='s1' style={styles.text}>
                    {format(new Date(event.startDate), 'MMM d')}
                </Text>
                <Text style={styles.text}>
                    &nbsp;-&nbsp;
                </Text>
                <Text category='s1' style={styles.text}>
                    {format(new Date(event.endDate), 'MMM d')}
                </Text>
            </Layout>
        </Layout>
    )    
}

EventPlaceTime.propTypes = {
    event: PropTypes.shape({
        location: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string
    }),
    mods: PropTypes.object
}

export default EventPlaceTime