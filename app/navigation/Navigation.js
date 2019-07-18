import { createSwitchNavigator, createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from 'react-navigation';

import { FormScreen, HomeScreen, LearnScreen } from '../screens';

const TabNavigator = createMaterialTopTabNavigator({
    form: FormScreen,
    learn: LearnScreen,
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#F44336',
        }
    }
});

const MainNavigator = createStackNavigator({
    tab: {
        screen: TabNavigator,
        title: 'Cidadão Vigilante',
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#F44336',
        },
        headerTintColor: '#fff',
    }
});

const AppNavigator = createSwitchNavigator({
    home: HomeScreen,
    main: MainNavigator,
}, {
    defaultNavigationOptions: {
        headerTint: '#FFF',
        headerStyle: {
            backgroundColor: '#F44336',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default createAppContainer(AppNavigator);