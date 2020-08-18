import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EventList from './EventList'
import EventDetail from './EventDetail'
import ScreenHeader from '../../shared/ScreenHeader'

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
      </Stack.Navigator>
    );
  }

export default EventStack