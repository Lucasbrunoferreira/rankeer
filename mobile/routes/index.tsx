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
        <Stack.Screen name="Login" component={Login} options={screenOptions} />

        <Stack.Screen name="Events" component={Events} options={screenOptions} />

        <Stack.Screen name="Projects" component={Projects} options={screenOptions} />

        <Stack.Screen name="Evaluation" component={Evaluation} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
