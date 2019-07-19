import React, { useEffect } from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import * as Font from 'expo-font';

import AppContainer from './app/navigation/Navigation';

export default App = () => {

  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

