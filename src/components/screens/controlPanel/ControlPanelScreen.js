import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Select, SelectItem, Card, Text } from '@ui-kitten/components'
import ScreenHeader from '../../shared/ScreenHeader'
import AddGamesModal from './AddGamesModal'
import { getEditableEvents } from '../../../utils'
import { WGCGlobalContext } from '../../../globalStore/context'
import { addGameToEvent } from '../../../globalStore/globalActions'

const ControlPanelScreen = () => {
    const {globalState: { user, events }, globalDispatch} = useContext(WGCGlobalContext)
    const editableEvents = getEditableEvents(user.id, events)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [modal, setModal] = useState(null)
    const saveGame = (game) => {
        const games = editableEvents[selectedIndex - 1].games || []
        const newGames = [...games, game]
        addGameToEvent(editableEvents[selectedIndex - 1].id, newGames, globalDispatch)
    }

    return (
        <Layout style={styles.container}>
            <ScreenHeader iconName='settings-2-outline' title='Manage Events' />
            { editableEvents.length === 0 ? <Text>You are not an administrator for any events</Text> : 
                <Layout style={styles.controlContainer}>
                    <Select
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}
                        value={editableEvents[selectedIndex - 1] && editableEvents[selectedIndex - 1].name}
                        label='Selected Event'
                        placeholder='No event selected'
                    >
                        {editableEvents.map(event => {
                            return (
                                <SelectItem key={event.id} title={event.name} />
                            )
                        })}
                    </Select>
                    <Layout style={styles.actionsContainer}>
                        <Card style={styles.card} status='success' onPress={() => setModal('details')}>
                            <Text>Edit Details</Text>
                        </Card>
                        <Card style={styles.card} status='success' onPress={() => setModal('games')}>
                            <Text>Add Games</Text>
                        </Card>
                        <Card style={styles.card} status='success' onPress={() => setModal('brackets')}>
                            <Text>Add Brackets</Text>
                        </Card>
                    </Layout>
                    <AddGamesModal show={modal === 'games'} hide={() => setModal(null)} saveGame={saveGame} />
                </Layout>
            }
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    controlContainer: {
        padding: 10
    },
    actionsContainer: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        height: 100,
        marginRight: 10,
        marginTop: 10,
        width: 150
    }
})

export default ControlPanelScreen