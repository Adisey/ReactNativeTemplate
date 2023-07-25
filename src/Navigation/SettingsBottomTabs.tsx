import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorTheme, Page3, Page5 } from '../Screens';
import { Login } from '../Screens/Login';

const SettingsStack = createBottomTabNavigator();

export function SettingsBottomTabs() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Page3"
      screenOptions={{
        tabBarActiveTintColor: '#0000FF',
      }}>
      <SettingsStack.Screen name="Page3" component={Page3} />
      <SettingsStack.Screen
        name="Page5"
        component={Page5}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="infocirlceo" color={color} size={size} />
          ),
        }}
      />
      <SettingsStack.Screen
        name="ColorTheme"
        component={ColorTheme}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="theme-light-dark"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <SettingsStack.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="login" color={color} size={size} />
          ),
        }}
      />
    </SettingsStack.Navigator>
  );
}
