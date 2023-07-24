import React from 'react';
import { Platform } from 'react-native';
import { MainNavigator } from './Navigation/MainNavigator';

function App(): Element {
  console.log(new Date().toISOString(), '-(RENDER)-APP->', Platform.OS, `<--`);
  return <MainNavigator />;
}

export default App;
