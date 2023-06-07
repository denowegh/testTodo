import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import ActiveTodosScreen from '../containers/ActiveTodosScreen';
import CompletedTodosScreen from '../containers/CompletedTodosScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
        name="ActiveTodos"
        component={ActiveTodosScreen}
        options={{
          tabBarLabel: "Active",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"pencil-square-o"}
              size={18}
              color={`${color}`}
            />
          )
        }}
      />
      <Tab.Screen
        name="CompletedTodos"
        component={CompletedTodosScreen}
        options={{
          tabBarLabel: "Completed",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"check-square-o"}
              size={18}
              color={`${color}`}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
