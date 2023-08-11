import { DarkStyles, LightStyles } from '../Styles';
import { useIsDarkMode } from './useIsDarkMode';

export const useColorThemeStyles = () => {
  const isDarkMode = useIsDarkMode();
  return isDarkMode ? DarkStyles : LightStyles;
};
