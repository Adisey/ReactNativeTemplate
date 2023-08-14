import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useColorThemeStyles } from '../hooks';
import { useNavigatorTheme } from '../hooks/useNavigatorTheme';
import { InfoPage, ReactionPage, SettingScreen } from '../Screens';

export type BottomTabsStackParamList = {
  Setting: undefined;
  InfoPage: undefined;
  ReactionPage: undefined;
};

const MainBottomNavigatorStack =
  createBottomTabNavigator<BottomTabsStackParamList>();

export function MainBottomNavigator() {
  const { backgroundColor, color } = useColorThemeStyles();
  const navigationTheme = useNavigatorTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <MainBottomNavigatorStack.Navigator
        initialRouteName="ReactionPage"
        screenOptions={{
          tabBarActiveBackgroundColor: backgroundColor,
          tabBarActiveTintColor: 'rgb(0, 122, 255)',
          tabBarInactiveBackgroundColor: backgroundColor,
          tabBarInactiveTintColor: color,
        }}>
        <MainBottomNavigatorStack.Screen
          name="ReactionPage"
          component={ReactionPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="dashboard" color={color} size={size} />
            ),
          }}
        />
        <MainBottomNavigatorStack.Screen
          name="InfoPage"
          component={InfoPage}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="infocirlceo" color={color} size={size} />
            ),
          }}
        />
        <MainBottomNavigatorStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'setting',
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="setting" color={color} size={size} />
            ),
          }}
        />
      </MainBottomNavigatorStack.Navigator>
    </NavigationContainer>
  );
}
