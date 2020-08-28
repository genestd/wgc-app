import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TeamList from './TeamList'
import TeamDetail from './TeamDetail'
import ScreenHeader from '../../shared/ScreenHeader'

const Stack = createStackNavigator();
function TeamStack() {
    return (
      <Stack.Navigator
        initialRouteName='List'
      >
        <Stack.Screen name="List" component={TeamList} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Detail"
          component={TeamDetail}
          options={
            {
              header: ({scene, previous, navigation}) => <ScreenHeader iconName='pin-outline' title={scene.route.params.team.name} />
            }
          }
        />
      </Stack.Navigator>
    );
  }

export default TeamStack