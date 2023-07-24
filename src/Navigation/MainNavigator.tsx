import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page1, Page2, PageMain } from '../Screens';
import { SettingsBottomTabs } from './SettingsBottomTabs';

export type MainStackParamList = {
  PageMain: undefined;
  Page1: undefined;
  Page2: { from: string } | undefined;
  Settings: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  console.log(new Date().toISOString(), '-(RENDER)-Main->', Platform.OS, `<--`);
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="PageMain">
        <MainStack.Screen
          name="PageMain"
          component={PageMain}
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
