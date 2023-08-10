import React, { useEffect, useState } from 'react';
import { createTables } from './db';
import { MainNavigator } from './Navigation';
import { Loader } from './Components/Loader/Loader';

function App(): Element {
  const [isInitialised, setInitialised] = useState<boolean>(false);

  useEffect(() => {
    createTables().then(() => {
      setInitialised(true);
    });
  }, []);

  return isInitialised ? <MainNavigator /> : <Loader />;
}

export default App;
