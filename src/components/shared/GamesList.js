import React from 'react'
import { Layout, Text, Icon, useTheme } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const GamesList = ({ games, navigation }) => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row'
        },
        cell: {
            flex: 1,
            padding: 8
        },
        row: {
            paddingRight: 10,
            paddingTop: 15,
            paddingBottom: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: theme['color-info-100']
        },
        icon: {
            width: 25,
            height: 25
        }
    })
    return (
        <Layout style={styles.container}>
            <Layout style={styles.cell}>
                {games.length > 0 ? (
                    games.map(game => {
                        return (
                            <TouchableOpacity key={game.name} onPress={()=> navigation.navigate('Game', { game, onChange: (value) => console.log(value) })} style={styles.row}>
                                <Text>{game.name}</Text>
                                <Icon name='arrow-ios-forward-outline' fill={theme['color-info-500']} style={styles.icon} />
                            </TouchableOpacity>
                        )
                    })
                ) : <Text>No games created for this event</Text>}
            </Layout>
        </Layout>
    )
}

export default GamesList