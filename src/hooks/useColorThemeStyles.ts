import { ViewStyle, useColorScheme } from 'react-native';
import { DarkStyles, LightStyles } from '../Styles';

export const useColorThemeStyles = (): ViewStyle => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode ? DarkStyles : LightStyles;
};
