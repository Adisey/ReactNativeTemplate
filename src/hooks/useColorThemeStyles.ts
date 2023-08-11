import { ViewStyle } from 'react-native';
import { DarkStyles, LightStyles } from '../Styles';
import { useIsDarkMode } from './useIsDarkMode';

export const useColorThemeStyles = (): ViewStyle => {
  const isDarkMode = useIsDarkMode();
  return isDarkMode ? DarkStyles : LightStyles;
};
