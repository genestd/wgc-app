import React from 'react'
import { Layout } from '@ui-kitten/components'

export default (props) => {
    const {team} = props.route.params
    console.log('team', team)
    return ( <Layout></Layout>)
}