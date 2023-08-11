import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IColorThemeTypes } from './interfaces/colorTheme';
import { createTables, getParams } from './db';
import { setColorThemeStore } from './middleware';
import { MainNavigator } from './Navigation';
import { CustomStatusBar, Loader } from './Components';

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

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <CustomStatusBar />
        {isInitialised ? <MainNavigator /> : <Loader />}
      </View>
    </SafeAreaProvider>
  );
}

export default App;
