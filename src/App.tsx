import React, { useEffect, useState } from 'react';
import { IColorThemeTypes } from './interfaces/colorTheme';
import { createTables, getParams } from './db';
import { setColorThemeStore } from './middleware';
import { MainNavigator } from './Navigation';
import { Loader } from './Components';

function App(): Element {
  const [isInitialised, setInitialised] = useState<boolean>(false);

  useEffect(() => {
    createTables().then(() => {
      setInitialised(true);
    });
    getParams('colorTheme').then(value => {
      value && setColorThemeStore(value as IColorThemeTypes);
    });
  }, []);

  return isInitialised ? <MainNavigator /> : <Loader />;
}

export default App;
