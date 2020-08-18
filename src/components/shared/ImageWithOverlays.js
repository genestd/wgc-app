import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

const ImageWithOverlays = ({ imageUrl, height = 200, overlayTop, overlayBottom }) => {
    return (
        <View style={{...styles.container, height }}>
            <Image source={{uri: imageUrl }} style={{...styles.image}} resizeMode='cover' />
            <View style={styles.topContainer}>
                {overlayTop}
            </View>
            <View style={styles.bottomContainer}>
                {overlayBottom}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerText: {
        color: '#fff'
    },
    topContainer: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        padding: 15,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.35)',
        opacity: .75
    },
    bottomContainer: {
        position: 'absolute',
        display: 'flex',
        bottom: 0,
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
})

export default ImageWithOverlays