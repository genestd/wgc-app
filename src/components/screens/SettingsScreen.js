import React, { useContext, useState } from 'react'
import { TouchableOpacity, StyleSheet, Platform } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import { Layout, Text, Input } from '@ui-kitten/components'
import ScreenHeader from '../shared/ScreenHeader'
import UserIcon from '../shared/UserIcon'
import { WGCGlobalContext } from '../../globalStore/context'
import { updateUserData } from '../../globalStore/globalActions'

const SettingsScreen = (props) => {
    const { globalState: { user }, globalDispatch} = useContext(WGCGlobalContext)
    const isEditable = props.route.params.user.id === user.id
    const [editing, setEditing] = useState(false)
    const [newName, setNewName] = useState(user.screenName || user.id)
    const [newBio, setNewBio] = useState(user.bio)
    const EditButton = () => (
        <TouchableOpacity
            onPress={() => setEditing(true)}
            style={{ paddingTop: Constants.statusBarHeight, backgroundColor: 'transparent', height: 100, position: 'absolute', right: 15, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Edit</Text>
        </TouchableOpacity>
    ) 
    const SaveButton = () => (
        <TouchableOpacity
            onPress={saveSettings}
            style={{ paddingTop: Constants.statusBarHeight, backgroundColor: 'transparent', height: 100, position: 'absolute', right: 15, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Save</Text>
        </TouchableOpacity>
    )
    const saveSettings = () => {
        setEditing(false)
        if (newName !== user.screenName || newBio !== user.bio) {
            updateUserData(user.id, { screenName: newName, bio: newBio }, globalDispatch)
        }
    }
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
                    }
                } catch (imageError) {
                    console.log(imageError)
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Layout style={styles.screen}>
            <ScreenHeader
                iconName='options-2-outline'
                title='Settings'
                headerRight={isEditable ? (editing ? SaveButton : EditButton) : null}
            />
            {editing ? (
                <>
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
                        <Input
                            autoFocus
                            maxLength={30}
                            value={newName}
                            onChangeText={setNewName}
                        />
                        <Layout style={styles.row}>
                            <Text category='h6'>{`@${user.id}`}</Text>
                        </Layout>
                        <Layout style={styles.bioContainer}>
                            <Text category='h6' style={styles.title}>
                                About
                            </Text>
                            <Input
                                multiline
                                value={newBio}
                                onChangeText={setNewBio}
                            />
                        </Layout>
                    </Layout>
                </>
            ) :
                <DisplaySettings user={user} />
            }
        </Layout>
    )
}

const DisplaySettings = ({ user }) => (
    <>
        <Layout style={{...styles.row, ...styles.avatar}}>
            <UserIcon
                avatar={user.avatar}
                username={user.id}
                overlap={false}
                size='large'
            />
        </Layout>
        <Layout style={styles.body}>
            <Text category='h5'>
                {user.screenName || user.id}
            </Text>
            <Layout style={styles.row}>
                <Text category='h6'>{`@${user.id}`}</Text>
            </Layout>
            <Layout style={styles.bioContainer}>
                <Text category='h6' style={styles.title}>
                    About
                </Text>
                <Text style={styles.bio}>
                    {user.bio}
                </Text>
            </Layout>
        </Layout>
    </>
)

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
        alignItems: 'center',
        paddingTop: 10
    },
    avatar: {
        justifyContent: 'center',
        height: 150 ,
    },
    bioContainer: {
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Spartan_700Bold'
    },
    bio: {
        paddingTop: 15
    },
    bioEdit: {
        marginLeft: 15,
        marginRight: 15
    }
})

export default SettingsScreen