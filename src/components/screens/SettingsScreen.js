import React, {useState } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Icon, Input } from '@ui-kitten/components'
import ScreenHeader from '../shared/ScreenHeader'

const SettingsScreen = (props) => {
    const [editingName, setEditingName] = useState(false)
    return (
        <Layout style={styles.screen}>
            <ScreenHeader iconName='options-2-outline' title='Settings' />
            <Layout style={styles.body}>
                <Text category='h4'>@genest</Text>
                
                    {!editingName 
                        ? (
                            <Layout style={styles.row}>
                                <Text category='s1'>TheImportanceOfBeing</Text>
                                <Icon name='edit-outline' fill='black' style={{ width: 25, height: 25}} onPress={() => setEditingName(true)} />
                            </Layout>
                        ) : (
                            <Input
                                autoFocus
                                onBlur={() => setEditingName(false)}
                                maxLength={30}
                            >
                                TheImportanceOfBeing
                            </Input>
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