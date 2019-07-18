import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import { FormScreen, LearnScreen } from '../screens';

const TabNavigator = createMaterialTopTabNavigator({
  form: FormScreen,
  learn: LearnScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#FFF'
    },
    activeTintColor: '#292929',
    inactiveTintColor: '#525252',
    indicatorStyle: {
      backgroundColor: '#292929'
    }
  }
});

const MainNavigator = createStackNavigator({
  home: {
    screen: TabNavigator,
    navigationOptions: () => ({
      title: 'Cidadão Vigilante',
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#292929'
    })
  }
})

export default createAppContainer(MainNavigator);