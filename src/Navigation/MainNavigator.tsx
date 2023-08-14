import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Theme } from '@react-navigation/native/src/types';
import { useColorThemeStyles, useIsDarkMode } from '../hooks';
import { useNavigatorTheme } from '../hooks/useNavigatorTheme';
import { MainScreen, Page1, Page2 } from '../Screens';
import { MainBottomNavigator } from './MainBottomNavigator';

export type MainStackParamList = {
  MainScreen: undefined;
  Page1: undefined;
  Page2: { from: string } | undefined;
  Settings: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

// ToDo: 14.08.2023 - Left only for example ;)

export function MainNavigator() {
  const navigationTheme = useNavigatorTheme();
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainStack.Navigator initialRouteName="MainScreen">
        <MainStack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Main Page' }}
        />
        <MainStack.Screen name="Page1" component={Page1} />
        <MainStack.Screen
          name="Page2"
          component={Page2}
          initialParams={{ from: 'App ^^^' }}
        />
        <MainStack.Screen name="Settings" component={MainBottomNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
