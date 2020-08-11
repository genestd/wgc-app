import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Icon } from '@ui-kitten/components'

const UserChip = props => {
    return (
        <Layout style={{...styles.chipContainer, ...props.style}}>
            <Layout style={styles.chipRow}>
                <Icon
                    style={{ width: 50, height: 50 }}
                    name='person-outline'
                    fill='#334455'
                />
                <Icon
                    style={{ width: 25, height: 25 }}
                    name='settings-2-outline'
                    fill='#334455'
                />
            </Layout>
            <Layout>
                <Text category='h6' style={styles.chipName}>
                    TheImportanceOfBeingGenest
                </Text>
                <Text category='s1' style={styles.chipName}>
                    @genest
                </Text>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    chipContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 35
    },
    chipRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chipName: {
        paddingTop: 10,
        paddingLeft: 7
    },
})

export default UserChip