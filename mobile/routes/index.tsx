import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Events from '../screens/Events';
import Projects from '../screens/Projects';
import Evaluation from '../screens/Evaluation';


const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={screenOptions} />

        <Stack.Screen name="events" component={Events} options={screenOptions} />

        <Stack.Screen name="projects" component={Projects} options={screenOptions} />

        <Stack.Screen name="evaluation" component={Evaluation} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
