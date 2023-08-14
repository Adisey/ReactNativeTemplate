import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useColorThemeStyles } from '../hooks';
import { LogOut, SelectColorTheme } from '../Components';

export const SettingScreen: React.FC = () => {
  const Styles = useColorThemeStyles();

  return (
    <SafeAreaView style={Styles}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <SelectColorTheme />
        <LogOut />
      </ScrollView>
    </SafeAreaView>
  );
};
