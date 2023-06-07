import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import RegistrationScreen from '../containers/RegistrationScreen';
import AuthenticationScreen from '../containers/AuthenticationScreen';


const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12
        },
      }}
      screenOptions={{
        tabBarStyle: {
          padding: 5,
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="AuthenticationScreen"
        component={AuthenticationScreen}
        options={{
          tabBarLabel: "Authentication",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"user"}
              size={18}
              color={`${color}`}
            />
          )
        }}
      />
      <Tab.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Registration",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"pencil-square-o"}
              size={18}
              color={`${color}`}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
