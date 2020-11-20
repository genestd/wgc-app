import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EventList from './EventList'
import EventDetail from './EventDetail'
import GameDetail from './GameDetail'
import ScreenHeader from '../../shared/ScreenHeader'
import SettingsScreen from '../SettingsScreen';

const Stack = createStackNavigator();
function EventStack() {
    return (
      <Stack.Navigator
        initialRouteName='List'
      >
        <Stack.Screen name="List" component={EventList} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Detail"
          component={EventDetail}
          options={
            {
              header: ({scene, previous, navigation}) => <ScreenHeader iconName='pin-outline' title={scene.route.params.event.name} />
            }
          }
        />
        <Stack.Screen
          name="Game"
          component={GameDetail}
          options={
            {
              header: ({scene, previous, navigation}) => <ScreenHeader iconName='activity-outline' title={scene.route.params.game.name} />
            }
          }
        />
        <Stack.Screen
          name="ViewUser"
          component={SettingsScreen}
          options={
            {
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    );
  }

export default EventStack