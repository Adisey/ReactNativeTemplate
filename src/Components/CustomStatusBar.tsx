import React from 'react';
import { StatusBar } from 'react-native';
import { useColorThemeStyles, useIsDarkMode } from '../hooks';

export const CustomStatusBar: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const { backgroundColor } = useColorThemeStyles();
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundColor}
    />
  );
};
