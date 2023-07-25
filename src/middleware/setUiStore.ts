import { ColorTheme, useUiStore } from '../stores';

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
};
