import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useColorThemeStyles } from '../hooks';
import { LogOut, Permissions, SelectColorTheme } from '../Components';

export const SettingScreen: React.FC = () => {
  const Styles = useColorThemeStyles();

  return (
    <SafeAreaView style={Styles}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <LogOut />
        <SelectColorTheme />
        <Permissions />
      </ScrollView>
    </SafeAreaView>
  );
};
