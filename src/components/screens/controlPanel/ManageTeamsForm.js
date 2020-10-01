import React, { useState, useContext } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Text, Layout, Button } from '@ui-kitten/components'

const ManageTeamsForm = ({ hideModal, saveGame }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout style={styles.container}>
                <Layout style={{...styles.banner, ...styles.modal}}>
                    <Text>Manage Teams</Text>
                </Layout>
                <Layout style={{...styles.body, ...styles.modal}}>
                </Layout>
                <Layout style={{...styles.banner, ...styles.row}}>
                    <Button onPress={hideModal}>Cancel</Button>
                    <Button onPress={() => {}}>Save</Button>
                </Layout>
            </Layout>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    container: {
        borderRadius: 8,
        height: 700,
        maxHeight: '100%',
        width: 300,
        maxWidth: '100%'
    },
    banner: {
        height: 100,
        display: 'flex',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    input: {
        width: '90%',
        marginBottom: 8
    }
})

export default ManageTeamsForm
