import { getAllParams, saveParams } from '../db';
import { ColorTheme, useUiStore } from '../stores';

const saveColorTheme = async (value: string): Promise<void> => {
  console.log(Date.now(), `--(*************************************)-  ->`);
  const bbb = await saveParams('colorTheme', value);
  console.log(Date.now(), '-(+++++++)->', typeof bbb, `-bbb->`, bbb);
  // const aaa = await getAllParams();
  // console.log(Date.now(), '-(ALL)-^^^^^^^^^^^^^^^^^^->', aaa.length);
  // aaa.forEach(i => {
  //   console.log(Date.now(), '-(Item)-^^^->', typeof i, `-i->`, i);
  // });
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
