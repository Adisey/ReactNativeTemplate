import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Page5 } from '../Screens/Page5';
import { Page4 } from '../Screens/Page4';
import { Page3 } from '../Screens/Page3';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const SettingsStack = createBottomTabNavigator();

export function SettingsBottomTabs() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Page3"
      screenOptions={{
        tabBarActiveTintColor: '#0000FF',
      }}>
      <SettingsStack.Screen name="Page3" component={Page3} />
      <SettingsStack.Screen name="Page4" component={Page4} />
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
    </SettingsStack.Navigator>
  );
}
