import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const GamesList = ({ games }) => {
    return (
        <Layout style={styles.container}>
            <Layout style={styles.cell}>
                {games.length > 0 ? (
                    games.map(game => <Text>{game.name}</Text>)
                ) : <Text>No games created for this event</Text>}
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        padding: 8
    },
})
export default GamesList