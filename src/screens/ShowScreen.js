import React,{ useContext} from 'react'
import { Text, View, TouchableOpacity } from 'react-native' 
import { Context } from '../context/ExpenseContext'
import { MaterialIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state } = useContext(Context)

    const exp = state.find( (e) => e.id === id)
    return (
        <View>
                <Text>{ exp.purpose }</Text>
                
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight :() =>  <TouchableOpacity onPress = { () => navigation.navigate('Edit',{id : navigation.getParam('id')})}>
                                <MaterialIcons name = 'edit' size = {30} />
                            </TouchableOpacity>
    }
    
} 
export default ShowScreen