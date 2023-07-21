import React from 'react';
import { Main } from './Screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page2 } from './Screens/Page2';
import { Page1 } from './Screens/Page1';
import { Platform } from 'react-native';

export type RootStackParamList = {
  Main: undefined;
  Page1: undefined;
  Page2: { from: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): Element {
  console.log(new Date().toISOString(), '-(RENDER)-APP->', Platform.OS, `<--`);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Main Page' }}
        />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen
          name="Page2"
          component={Page2}
          initialParams={{ from: 'App ^^^' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
