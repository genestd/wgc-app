import React, { useState } from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'

const GameDetail = (props) => {
    const [status, setStatus] = useState('off')
    const handleClick = (evt) => {
        evt.preventDefault()
        const newStatus = (status === 'on' ? 'off' : 'on')
        setStatus(newStatus)
        props.route.params.onChange(newStatus)
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <Text>{status}</Text>
        </TouchableOpacity>
    )
}

export default GameDetail