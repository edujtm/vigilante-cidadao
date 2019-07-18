import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout} from 'react-native-ui-kitten';

import AppContainer from './app/navigation/Navigation';

export default App = () => {
  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}
    >
      <AppContainer />
    </ApplicationProvider>
  );
}

