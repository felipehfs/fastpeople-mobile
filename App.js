import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './screens/login';
import RegisterPage from './screens/register';
import HomePage from './screens/home';
import WebPage from './screens/web';
import ProfilePage from './screens/profile';

import { client } from './api/graphql';
import { ApolloProvider } from '@apollo/react-hooks';

const Stack = createStackNavigator();

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="register" component={RegisterPage} />
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="web" component={WebPage} />
          <Stack.Screen name="profile" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}