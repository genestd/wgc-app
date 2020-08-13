import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Icon, Input } from '@ui-kitten/components'
import API, { graphqlOperation } from '@aws-amplify/api'
import ScreenHeader from '../shared/ScreenHeader'
import { updateUser } from '../../graphql/mutations'
import { WGCGlobalContext } from '../../globalStore/context'
import { UPDATE_USER } from '../../globalStore/globalActionTypes'

const SettingsScreen = (props) => {
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)

    const [editingName, setEditingName] = useState(false)
    const [newName, setNewName] = useState(globalState.user.screenName || globalState.user.id)
    const saveNewName = async () => {
        try {
            setEditingName(false)
            console.log(`setting ${globalState.user.id} screen name to ${newName}`)
            await API.graphql(graphqlOperation(updateUser, {
                input: {
                    id: globalState.user.id,
                    screenName: newName,
                }
            }))
            globalDispatch({ type: UPDATE_USER, user: { screenName: newName }})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout style={styles.screen}>
            <ScreenHeader iconName='options-2-outline' title='Settings' />
            <Layout style={styles.body}>
                <Text category='h4'>{`@${globalState.user.id}`}</Text>
                    {!editingName 
                        ? (
                            <Layout style={styles.row}>
                                <Text category='s1'>{globalState.user.screenName || globalState.user.id}</Text>
                                <Icon name='edit-outline' fill='black' style={{ width: 25, height: 25}} onPress={() => setEditingName(true)} />
                            </Layout>
                        ) : (
                            <Input
                                autoFocus
                                onBlur={saveNewName}
                                maxLength={30}
                                value={newName}
                                onChangeText={setNewName}
                            />
                        )
                    }   
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    body: {
        padding: 25
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default SettingsScreen