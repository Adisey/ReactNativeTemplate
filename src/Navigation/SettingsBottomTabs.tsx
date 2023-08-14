import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/src/types';
import { useColorThemeStyles, useIsDarkMode } from '../hooks';
import { useNavigatorTheme } from '../hooks/useNavigatorTheme';
import { ColorTheme, InfoPage, LogOut, ReactionPage } from '../Screens';

export type BottomTabsStackParamList = {
  ColorTheme: undefined;
  InfoPage: undefined;
  LogOut: undefined;
  ReactionPage: undefined;
};

const SettingsStack = createBottomTabNavigator<BottomTabsStackParamList>();

export function SettingsBottomTabs() {
  const { backgroundColor, color } = useColorThemeStyles();
  const navigationTheme = useNavigatorTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
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
          name="LogOut"
          component={LogOut}
          options={{
            tabBarLabel: 'LogOut',
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="logout" color={color} size={size} />
            ),
          }}
        />
      </SettingsStack.Navigator>
    </NavigationContainer>
  );
}
