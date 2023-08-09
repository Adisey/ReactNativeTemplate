import React, { useEffect, useState } from 'react';
import { MainNavigator } from './Navigation';
import { Loader } from './Components/Loader/Loader';
import { createTables } from './db';

function App(): Element {
  const [isInitialised, setInitialised] = useState<boolean>(false);

  useEffect(() => {
    createTables('App').then(() => {
      setInitialised(true);
    });
  }, []);

  console.log(Date.now(), `--(RENDER)- App isInitialised ->`, isInitialised);

  return isInitialised ? <MainNavigator /> : <Loader />;
}

export default App;
