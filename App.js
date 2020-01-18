import { createAppContainer } from 'react-navigation-stack'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator({
    Home : HomeScreen
},{
    initialRouteName : 'Home',
    defaultNavigationOptions : {
        title : 'Demo'
    }
})

export default createAppContainer(navigator)