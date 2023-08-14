import { DefaultTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { useColorThemeStyles } from './useColorThemeStyles';
import { useIsDarkMode } from './useIsDarkMode';

export const useNavigatorTheme = (): Theme => {
  const isDarkMode = useIsDarkMode();
  const { backgroundColor, color } = useColorThemeStyles();

  return {
    dark: isDarkMode,
    colors: {
      ...DefaultTheme.colors,
      background: backgroundColor,
      card: backgroundColor,
      text: color,
    },
  };
};
