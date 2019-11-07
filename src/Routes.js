import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './Interfaces/Main'
import Login from './Interfaces/Login'
import Register from './Interfaces/Register'
import Game from './Interfaces/Game'

const AppNavigator = createStackNavigator({
    Login,
    Main,
    Register,
    Game
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#F8F220'
        },
        headerTintColor: '#22DF22'
    }
});

export default createAppContainer(AppNavigator);