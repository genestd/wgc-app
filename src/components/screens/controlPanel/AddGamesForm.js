import React, { useState, useContext } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Text, Layout, Button, Input, Select, SelectItem, IndexPath } from '@ui-kitten/components'
import { ELIMINATION_TYPES, SCORING_METHODS, HEAD_TO_HEAD, BRACKET_TYPES } from '../../../constants/app'

const AddGamesForm = ({ hideModal, saveGame }) => {
    const [name, setName] = useState('')
    const [rules, setRules] = useState('')
    const [scoringMethod, setScoringMethod] = useState(new IndexPath(0))
    const [pointsToWin, setPointsToWin] = useState('11')
    const [eliminationType, setEliminationType] = useState(new IndexPath(0))
    const resetState = () => {
        setName('')
        setRules('')
        setScoringMethod(new IndexPath(0))
        setPointsToWin('11')
        setEliminationType(new IndexPath(0))
    }
    const cancel = () => {

        resetState()
        hideModal()
    }
    const save = () => {
        const game = {
            name,
            rules,
            scoringMethod: SCORING_METHODS[scoringMethod.row].key,
            pointsToWin,
            bracketType: BRACKET_TYPES[0].key,
            eliminationType: ELIMINATION_TYPES[eliminationType.row].key,
        }
        saveGame(game)
        resetState()
        hideModal()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout style={styles.container}>
                <Layout style={{...styles.banner, ...styles.modal}}>
                    <Text>Add Game</Text>
                </Layout>
                <Layout style={{...styles.body, ...styles.modal}}>
                    <Input
                        value={name}
                        onChangeText={setName}
                        label='Name of the Game'
                        style={styles.input}
                    />
                    <Input
                        value={rules}
                        onChangeText={setRules}
                        label='Rules'
                        style={styles.input}
                        placeholder='Rules are optional, but recommended. E.g. Standard house rules. In the unlikely event of a tie, a coin will be flipped...'
                        multiline
                        numberOfLines={8}
                    />
                    <Select
                        selectedIndex={scoringMethod}
                        onSelect={index => setScoringMethod(index)}
                        value={SCORING_METHODS[scoringMethod-1].value}
                        label='Scoring Method'
                        style={styles.input}
                        onFocus={Keyboard.dismiss}
                    >
                        {SCORING_METHODS.map(etype => {
                            return (
                                <SelectItem key={etype.key} title={etype.value} />
                            )
                        })}
                    </Select>
                    {SCORING_METHODS[scoringMethod.row].value === HEAD_TO_HEAD && 
                        <>
                            <Select
                                selectedIndex={eliminationType}
                                onSelect={index => setEliminationType(index)}
                                value={ELIMINATION_TYPES[eliminationType-1].value}
                                label='Elimination Type'
                                style={styles.input}
                                onFocus={Keyboard.dismiss}
                            >
                                {ELIMINATION_TYPES.map(etype => {
                                    return (
                                        <SelectItem key={etype.key} title={etype.value} />
                                    )
                                })}
                            </Select>
                            <Input
                                value={pointsToWin}
                                onChangeText={setPointsToWin}
                                label='Points to win game'
                                style={styles.input}
                                keyboardType='numeric'
                            />
                        </>
                    }
                </Layout>
                <Layout style={{...styles.banner, ...styles.row}}>
                    <Button onPress={cancel}>Cancel</Button>
                    <Button onPress={save}>Save</Button>
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

export default AddGamesForm
