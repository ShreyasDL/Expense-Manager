import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
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

const styles = StyleSheet.create({})

export default IndexScreen