import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export * from './Text.styles';
export const LightStyles: ViewStyle = StyleSheet.create({
  backgroundColor: Colors.lighter,
  color: Colors.black,
});
export const DarkStyles: ViewStyle = StyleSheet.create({
  backgroundColor: Colors.lighter,
  color: Colors.white,
});
