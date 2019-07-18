import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';

import AppContainer from './app/navigation/Navigation';

export default App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

