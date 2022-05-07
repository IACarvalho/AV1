// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login'
import Layout from './Pages/Layout'
import Logon from './Pages/Logon'
import PasswordRecover from './Pages/PasswordRecover'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Layout} />
        <Stack.Screen name="Logon" component={Logon} />
        <Stack.Screen name="PasswordRecover" component={PasswordRecover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;