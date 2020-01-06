import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import AddBillsScreen from './src/screens/AddBillsScreen'
import ViewBillsScreen from './src/screens/ViewBillsScreen'

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    AddBill : AddBillsScreen,
    ViewBill : ViewBillsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
