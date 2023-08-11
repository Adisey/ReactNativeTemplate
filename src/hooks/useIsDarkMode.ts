import { useColorScheme } from 'react-native';
import { IColorTheme } from '../interfaces/colorTheme';
import { useUiStore } from '../stores';

export const useIsDarkMode = () => {
  const isSystemDark = useColorScheme() === 'dark';
  const { colorTheme } = useUiStore();
  if (colorTheme === IColorTheme.DARK) {
    return true;
  } else if (colorTheme === IColorTheme.LIGHT) {
    return false;
  } else {
    return isSystemDark;
  }
};
