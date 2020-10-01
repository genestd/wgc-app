import React from 'react'
import { StyleSheet } from 'react-native'
import { Modal } from '@ui-kitten/components'
import AddGamesForm from './AddGamesForm'
import ManageTeamsForm from './ManageTeamsForm'

const ControlModal = ({ show, modal, toggleModal, saveGame }) => {
    const hideModal = () => toggleModal(null)
    return (
        <Modal visible={show} onBackdropPress={hideModal} backdropStyle={styles.backdrop} style={styles.modal}>
            {modal === 'games' && <AddGamesForm hideModal={hideModal} saveGame={saveGame} />}          
            {modal === 'teams' && <ManageTeamsForm hideModal={hideModal} />}          
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

export default ControlModal