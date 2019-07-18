import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import { FormScreen, LearnScreen } from '../screens';

const MainNavigator = createMaterialTopTabNavigator({
  form: FormScreen,
  learn: LearnScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#FFF'
    },
    activeTintColor: '#292929',
    inactiveTintColor: '#525252',
    tabStyle: {
      color: '#292929'
    }
  }
});

export default createAppContainer(MainNavigator);