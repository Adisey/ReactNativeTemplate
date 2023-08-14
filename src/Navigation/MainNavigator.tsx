import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Theme } from '@react-navigation/native/src/types';
import { useColorThemeStyles, useIsDarkMode } from '../hooks';
import { MainScreen, Page1, Page2 } from '../Screens';
import { SettingsBottomTabs } from './SettingsBottomTabs';

export type MainStackParamList = {
  MainScreen: undefined;
  Page1: undefined;
  Page2: { from: string } | undefined;
  Settings: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  const isDarkMode = useIsDarkMode();
  const { backgroundColor, color } = useColorThemeStyles();

  const MyTheme: Theme = {
    dark: isDarkMode,
    colors: {
      ...DefaultTheme.colors,
      background: backgroundColor,
      card: backgroundColor,
      text: color,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
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
        <MainStack.Screen name="Settings" component={SettingsBottomTabs} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
