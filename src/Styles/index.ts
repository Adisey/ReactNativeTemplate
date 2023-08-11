import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export * from './Text.styles';
export * from './ColorThemeButton.styles';
export const LightStyles: ViewStyle = StyleSheet.create({
  backgroundColor: Colors.lighter,
  color: Colors.darker,
});
export const DarkStyles: ViewStyle = StyleSheet.create({
  backgroundColor: Colors.darker,
  color: Colors.lighter,
});
