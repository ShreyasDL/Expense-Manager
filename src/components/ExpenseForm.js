import React, { useState} from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const ExpenseForm = ( { onSubmit , initialValues}) => {
    const [amount, setAmount] = useState(initialValues.amount)
    const [purpose, setPurpose] = useState(initialValues.purpose)
    return (
        <View>
            <Text style = { styles.label } >Add Amount : </Text>
            <TextInput 
                style = { styles.input } 
                autoCapitalize = 'none'
                autoCorrect = { false }
                value = { amount }
                onChangeText = { (newAmount) => setAmount(newAmount) }
            />
            <Text style = { styles.label } >Add Purpose : </Text>
            <TextInput 
                style = { styles.input } 
                autoCapitalize = 'none'
                autoCorrect = { false }
                value = { purpose }
                onChangeText = { (newPurpose) => setPurpose(newPurpose) }
            />
            <Button 
                title = 'Save'
                onPress = { () => onSubmit(amount, purpose) }
            />
        </View>
    )
}

ExpenseForm.defaultProps = {
    initialValues : { amount : '' , purpose : '' }
}

const styles = StyleSheet.create({
    label : {
        fontSize :18,
        margin : 10
    },
    input : {
        fontSize : 16,
        borderWidth : 1 ,
        borderColor : 'black',
        padding : 10 , 
        margin : 10
    }
})

export default ExpenseForm