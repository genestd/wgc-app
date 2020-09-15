import React, { useContext, useState } from 'react'
import { TouchableOpacity, StyleSheet, Platform } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Layout, Text, Icon, Input } from '@ui-kitten/components'
import API, { graphqlOperation } from '@aws-amplify/api'
import ScreenHeader from '../shared/ScreenHeader'
import UserIcon from '../shared/UserIcon'
import { updateUser } from '../../graphql/mutations'
import { WGCGlobalContext } from '../../globalStore/context'
import { UPDATE_USER } from '../../globalStore/globalActionTypes'
import { updateUserData } from '../../globalStore/globalActions'

const SettingsScreen = (props) => {
    const { globalState: { user }, globalDispatch} = useContext(WGCGlobalContext)
    const [editingName, setEditingName] = useState(false)
    const [newName, setNewName] = useState(user.screenName || user.id)
    const showImagePicker = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (permission.granted) {
                try {
                    const pickerResult = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images ,
                        allowsEditing: false,
                        aspect: [4, 3],
                        quality: 1,
                    })
                    if (!pickerResult.cancelled) {
                        const image = await fetch(Platform.OS === 'android' ? pickerResult.uri : pickerResult.uri.replace('file://', ''))
                        const blob = await image.blob()
                        updateUserData(user.id, { avatar:  blob}, globalDispatch)
                        globalDispatch({ type: UPDATE_USER, user: { avatar: pickerResult.uri }})
                    }
                } catch (imageError) {
                    console.log(imageError)
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    const saveNewName = async () => {
        try {
            setEditingName(false)
            console.log(`setting ${user.id} screen name to ${newName}`)
            await API.graphql(graphqlOperation(updateUser, {
                input: {
                    id: user.id,
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
            <Layout style={{...styles.row, ...styles.avatar}}>
                <TouchableOpacity onPress={showImagePicker}>
                    <UserIcon
                        avatar={user.avatar}
                        username={user.id}
                        overlap={false}
                        size='large'
                    />
                </TouchableOpacity>
            </Layout>
            <Layout style={styles.body}>
                <Text category='h4'>{`@${user.id}`}</Text>
                    {!editingName 
                        ? (
                            <Layout style={styles.row}>
                                <Text category='s1'>{user.screenName || user.id}</Text>
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
    },
    avatar: {
        justifyContent: 'center',
        height: 150 ,
    }
})

export default SettingsScreen