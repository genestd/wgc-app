import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import UserIcon from './UserIcon'
import { getFreeAgents } from '../../utils'
import TeamIcon from './TeamIcon'

const AttendeeList = ({ teams, registeredUsers }) => {
    return (
        <Layout style={styles.container}>
            <Layout style={styles.cell}>
            	<Text category='h6' style={styles.title}>
            	    Teams
            	</Text>
                <Layout style={styles.subContainer}>
                    {teams.length > 0 ? (
                        teams.map(team => <TeamIcon key={team.id} name={team.name} avatar={team.avatar} />)
                    ) : <Text>No teams assigned to this event</Text>}
                </Layout>
            </Layout>
            <Layout style={styles.cell}>
                <Text category='h6' style={styles.title}>
                    Free Agents
                </Text>
                <Layout style={styles.subContainer}>
                    {getFreeAgents(teams, registeredUsers).map(user => (
                        <Layout key={user.userId} style={{ marginRight: 5, marginBottom: 5}}>
                            <UserIcon
                                avatar={user.avatar}
                                username={user.userId}
                                overlap={false}
                                canNavigate
                            />
                        </Layout>
                    ))}
                </Layout>

            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        padding: 8
    },
    title: {
        textAlign: 'center',
        padding: 8,
        textDecorationLine: 'underline'
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
export default AttendeeList