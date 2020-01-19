import React, { useContext } from 'react'
import { Text, View, StyleSheet,TouchableOpacity, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Context } from '../context/ExpenseContext'

const IndexScreen = ({ navigation }) => {
    const { state, deleteExpense } = useContext(Context)
    
    return (
        <View>
            <FlatList
                data = { state } 
                keyExtractor = { (expense) => expense.purpose + Math.floor(Math.random()*9999) }
                renderItem = { ({item}) => {
                    return (
                        <View style = { styles.row }>
                            <Text style = {styles.text}>{item.purpose}</Text>
                            <TouchableOpacity onPress = { () => deleteExpense(item.id) }>
                                <AntDesign name = 'delete' style = { styles.icon }/>
                            </TouchableOpacity>
                        </View>
                        )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight : () => <TouchableOpacity onPress = { () => navigation.navigate('Add') }>
                                <AntDesign name = 'plus' size = {30} />
                            </TouchableOpacity>
        }
    
}

const styles = StyleSheet.create({
    row :{
        flexDirection : 'row',
        justifyContent :'space-between',
        borderBottomColor : 'grey',
        borderBottomWidth : 1,
        marginTop : 5,
        marginHorizontal : 5
    },
    text :{
        fontSize : 16,
        padding : 5
    },
    icon : {
        fontSize : 25,
        padding : 5
    }
})

export default IndexScreen