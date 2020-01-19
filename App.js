import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider }  from './src/context/ExpenseContext'
import AddExpenseScreen from './src/screens/AddExpenseScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator({
    Index : IndexScreen,
    Add : AddExpenseScreen,
    Show : ShowScreen,
    Edit : EditScreen
},{
    initialRouteName : 'Index',
    defaultNavigationOptions : {
        title : 'Expense Manager'
    }
})

const App = createAppContainer(navigator)

export default () => {
    return <Provider><App /></Provider>
}