import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import { FormScreen, LearnScreen, MapScreen } from '../screens';

const TabNavigator = createMaterialTopTabNavigator({
  form: FormScreen,
  learn: LearnScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#eeeeee'
    },
    activeTintColor: '#262626',
    inactiveTintColor: '#80868a',
    indicatorStyle: {
      backgroundColor: '#262626'
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
        shadowOpacity: 0,
        backgroundColor: '#eeeeee',
        borderBottomWidth: 0,
      },
      headerTintColor: '#262626',
      headerTitleStyle: {
        fontSize: 28
      }
    }),
  },
  map: {
    screen: MapScreen,
    navigationOptions: () => ({
      title: 'Selecionar localização',
      headerStyle: {
        backgroundColor: '#eeeeee'
      },
      headerTintColor: '#262626',
    }),
  },
})

export default createAppContainer(MainNavigator);
