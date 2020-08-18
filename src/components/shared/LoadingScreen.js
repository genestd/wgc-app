import React from 'react'
import { Spinner, Layout } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

export default () => (
    <Layout style={styles.container}>
        <Spinner />
    </Layout>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})