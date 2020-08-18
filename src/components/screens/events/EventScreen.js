import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EventList from './EventList'
import EventDetail from './EventDetail'

const Stack = createStackNavigator();
function EventStack() {
    return (
      <Stack.Navigator
        initialRouteName='List'
      >
        <Stack.Screen name="List" component={EventList} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={EventDetail} />
      </Stack.Navigator>
    );
  }

export default EventStack