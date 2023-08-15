import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from './stores';
import { initApp } from './middleware/app';
import { MainBottomNavigator } from './Navigation';
import { LogIn } from './Screens';
import { CustomStatusBar, Loader } from './Components';

function App(): Element {
  const [isInitialised, setInitialised] = useState<boolean>(false);
  const { isAuth } = useAuthStore();

  useEffect(() => {
    initApp().then(() => setInitialised(true));
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        {isInitialised ? (
          isAuth ? (
            <MainBottomNavigator />
          ) : (
            <LogIn />
          )
        ) : (
          <Loader />
        )}
      </View>
    </SafeAreaProvider>
  );
}

export default App;
