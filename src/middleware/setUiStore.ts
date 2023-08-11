import { IColorThemeTypes } from '../interfaces/colorTheme';
import { saveParams } from '../db';
import { useUiStore } from '../stores';

const saveColorTheme = async (theme?: IColorThemeTypes): Promise<void> => {
  await saveParams('colorTheme', theme);
};

export const setColorThemeStore = (theme: IColorThemeTypes) => {
  useUiStore.getState().setStoreColorTheme(theme);
};
export const setColorTheme = (theme: IColorThemeTypes) => {
  setColorThemeStore(theme);
  saveColorTheme(theme);
};
