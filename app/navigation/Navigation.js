import { createSwitchNavigator, createMaterialTopTabNavigator,createAppContainer } from 'react-navigation';

import { FormScreen, HomeScreen } from '../screens';

const MainNavigator = createMaterialTopTabNavigator({
    learn: LearnScreen,
    form: FormScreen,
}, {
    paths: ['form', 'learn'],
});

const MainNavigator = createStackNavigator({
    home: HomeScreen,
    main: MainNavigator,
}, {
    headerStyle: {
        backgroundColor: '#F44336',
    },
    defaultNavigationOptions: {
        headerTint: '#FFF',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
    }
});

export default createAppContainer(MainNavigator);