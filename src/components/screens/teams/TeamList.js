import React, { useContext } from 'react'
import { Image, FlatList, TouchableOpacity } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { WGCGlobalContext } from '../../../globalStore/context'
import ScreenHeader from '../../shared/ScreenHeader'
import { StyleSheet } from 'react-native'

const TeamList = ({navigation}) => {
    const {globalState, globalDispatch} = useContext(WGCGlobalContext)

    return (
        <Layout style={styles.container}>
            <ScreenHeader iconName='people-outline' title='My Teams' />
            <Layout>
                <FlatList
                    data={globalState.user.teams}
                    renderItem={({item}) => <TeamAvatar teamData={item} navigation={navigation} />}
                    keyExtractor={(item) => item.team.id}
                />
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default TeamList

const TeamAvatar = ({ teamData, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {team: teamData.team})}>
            <Layout style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                <Layout>
                    <Image source={{ uri: teamData.team.avatar || 'https://placehold.it/125'}} style={{ width: 125, height: 125, borderRadius: 65 }}/>
                </Layout>
                <Layout style={{ flex: 1}}>
                    <Text category='h4' style={{width: '100%', textAlign: 'center', paddingBottom: 10}}>{teamData.team.name}</Text>
                    <Layout style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                        <Layout style={{ flex: 1, alignItems: 'center'}}>
                            <Text category='p1'>Events:</Text>
                            <Text>{teamData.team.events.length}</Text>
                        </Layout>
                        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Avg Place:</Text>
                            <Text>3</Text>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        </TouchableOpacity>
    )
}
