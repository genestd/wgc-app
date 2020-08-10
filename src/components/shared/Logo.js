import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Logo = () => (
    <View style={styles.logoView}>
        <Text style={styles.logoText}>W</Text>
    </View>
)

const styles = StyleSheet.create({
    logoView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        height: 200,
        maxHeight: 300
    },
    logoText: {
        fontSize: 76,
        color: 'red'
    }
})

export default Logo