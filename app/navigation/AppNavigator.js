import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../config';

import ActiveTodosScreen from '../containers/ActiveTodosScreen';
import CompletedTodosScreen from '../containers/CompletedTodosScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: config.navigation.label_font_size
        },
      }}
      
      screenOptions={{
        tabBarStyle: {
          padding: config.navigation.tab_padding,
          backgroundColor:config.colors.dim_gray,
        },
        headerStyle: {
          backgroundColor:config.colors.dim_gray,
        },
        headerTitleStyle:{
          color: config.colors.golden
        },
        tabBarActiveTintColor: config.colors.golden,
        headerShown: config.navigation.show_label
      }}
    >
      <Tab.Screen
        name="ActiveTodos"
        component={ActiveTodosScreen}
        options={{
          tabBarLabel: config.navigation.label_active,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={config.icons.pencil_square}
              size={config.navigation.tab_icon_size}
              color={`${color}`} 
            />
          )
        }}
      />
      <Tab.Screen
        name="CompletedTodos"
        component={CompletedTodosScreen}
        options={{
          tabBarLabel: config.navigation.label_completed,
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={config.icons.check_square} 
              size={config.navigation.tab_icon_size} 
              color={`${color}`} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
