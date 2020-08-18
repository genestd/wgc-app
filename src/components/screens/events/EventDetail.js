import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import EventPlaceTime from '../../shared/EventPlaceTime'
import ImageWithOverlays from '../../shared/ImageWithOverlays'

const EventDetail = (props) => {
    const { event } = props.route.params
    return (
        <ScrollView>
            <Layout style={{flex: 1}}>
                <ImageWithOverlays
                    height={300}
                    imageUrl='https://www.oregonlive.com/resizer/bOMI-qO3VlS-uKR40hdctQZSw6U=/700x394/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/PTKO4SBCTVDNJPTHJAONPZHYH4.jpg'
                    overlayTop={<EventPlaceTime event={event} mode='dark' />} 
                    overlayBottom={<Text category='s1' style={styles.imageOverlayText}>{event.tagline}</Text>} 
                />
            </Layout>
            <Layout>
            </Layout>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    secondaryImage: {
        position: 'relative',
        width: '100%',
        height: '50%'
    },
    imageOverlayTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    imageOverlayText: {
        color: 'white'
    }
})

export default EventDetail