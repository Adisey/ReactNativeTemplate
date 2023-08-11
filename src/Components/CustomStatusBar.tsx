import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorThemeStyles, useIsDarkMode } from '../hooks';

export const CustomStatusBar: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const { backgroundColor } = useColorThemeStyles();
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ height: top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
      />
    </View>
  );
};
