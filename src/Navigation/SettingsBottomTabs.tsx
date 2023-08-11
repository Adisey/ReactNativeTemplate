import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorThemeStyles } from '../hooks';
import { ColorTheme, InfoPage, Login, ReactionPage } from '../Screens';

export type BottomTabsStackParamList = {
  ColorTheme: undefined;
  InfoPage: undefined;
  Login: undefined;
  ReactionPage: undefined;
};

const SettingsStack = createBottomTabNavigator<BottomTabsStackParamList>();

export function SettingsBottomTabs() {
  const { backgroundColor, color } = useColorThemeStyles();

  return (
    <SettingsStack.Navigator
      initialRouteName="ReactionPage"
      screenOptions={{
        tabBarActiveBackgroundColor: backgroundColor,
        tabBarActiveTintColor: 'rgb(0, 122, 255)',
        tabBarInactiveBackgroundColor: backgroundColor,
        tabBarInactiveTintColor: color,
      }}>
      <SettingsStack.Screen
        name="ReactionPage"
        component={ReactionPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <SettingsStack.Screen
        name="InfoPage"
        component={InfoPage}
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
          tabBarLabel: 'Theme',
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
