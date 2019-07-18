import { createStackNavigator, createAppContainer } from 'react-navigation';

import { FormScreen, HomeScreen } from '../screens';

const MainNavigator = createStackNavigator({
    home: HomeScreen,
    form: FormScreen,
})

export default createAppContainer(MainNavigator);