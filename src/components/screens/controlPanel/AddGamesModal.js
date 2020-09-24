import React from 'react'
import { StyleSheet } from 'react-native'
import { Modal } from '@ui-kitten/components'
import AddGamesForm from './AddGamesForm'

const AddGamesModal = ({ show, hide, saveGame }) => {
    
    return (
        <Modal visible={show} onBackdropPress={hide} backdropStyle={styles.backdrop} style={styles.modal}>
            <AddGamesForm hideModal={hide} saveGame={saveGame} />            
        </Modal>
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
    }
})

export default AddGamesModal