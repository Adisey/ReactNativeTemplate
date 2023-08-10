import { saveParams } from '../db';
import { ColorTheme, useUiStore } from '../stores';

const saveColorTheme = async (value: string): Promise<void> => {
  const bbb = await saveParams('colorTheme', value);
  console.log(Date.now(), '-(Saved object)->', `-bbb->`, bbb);
};

export const setColorTheme = (theme: string) => {
  console.log(new Date().toISOString(), '-(MW setColorTheme)->', theme, `<--`);
  let colorTheme: ColorTheme = ColorTheme.DEFAULT;

  switch (theme) {
    case '1':
      colorTheme = ColorTheme.LIGHT;
      break;
    case '2':
      colorTheme = ColorTheme.DARK;
      break;
    default:
      break;
  }

  // useUiStore.setState({ colorTheme });
  useUiStore.getState().setStoreColorTheme(colorTheme);
  saveColorTheme(theme);
};
