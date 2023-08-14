import { IColorThemeTypes } from '../interfaces/colorTheme';
import { createAppParamsTables, getParams } from '../db';
import { setAuth } from './setAuthStore';
import { setColorThemeStore } from './setUiStore';

export const initApp = async (): Promise<void> => {
  await createAppParamsTables();
  const theme = await getParams('colorTheme');
  setColorThemeStore(theme as IColorThemeTypes);
  const token = await getParams('tokenAccess');
  if (token && token.length) {
    setAuth(true);
  }
};
